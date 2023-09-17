import sumBy from 'lodash/sumBy';
import PropTypes from 'prop-types';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { alpha, useTheme } from '@mui/material/styles';
// utils
import { fNumber } from 'src/utils/format-number';
// components
import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function CaseProgress({ title, subheader, chart, ...other }) {
    const theme = useTheme();

    const {
        colors = [theme.palette.primary.light, theme.palette.primary.main],
        series,
        options,
    } = chart;

    const total = sumBy(series, 'value');

    const chartSeries = (series.filter((i) => i.label === 'Completed')[0].value / total) * 100;

    const chartOptions = useChart({
        legend: {
            show: false,
        },
        grid: {
            padding: { top: -32, bottom: -32 },
        },
        fill: {
            type: 'gradient',
            gradient: {
                colorStops: [
                    { offset: 0, color: colors[0] },
                    { offset: 100, color: colors[1] },
                ],
            },
        },
        plotOptions: {
            radialBar: {
                hollow: { size: '64%' },
                dataLabels: {
                    name: { offsetY: -16 },
                    value: { offsetY: 8 },
                    total: {
                        label: 'Days',
                        formatter: () => fNumber(total),
                    },
                },
            },
        },
        ...options,
    });

    return (
        <div className='w-full min-h-[35vh] items-center justify-even flex flex-col shadow-md gap-8'> 
            
            <h2 className='text-2xl font-medium'>Case progress</h2>
            <div className='flex items-center gap-3'>
                <Chart type="radialBar" series={[chartSeries]} options={chartOptions} height={280} />

                <Stack spacing={2} sx={{ p: 5 }}>
                    {series.map((item) => (
                        <Stack
                            key={item.label}
                            spacing={1}
                            direction="row"
                            alignItems="center"
                            sx={{
                                typography: 'subtitle2',
                            }}
                        >
                            <Box
                                sx={{
                                    width: 16,
                                    height: 16,
                                    bgcolor: alpha(theme.palette.grey[500], 0.16),
                                    borderRadius: 0.75,
                                    ...(item.label === 'Completed' && {
                                        bgcolor: colors[1],
                                    }),
                                }}
                            />
                            <Box sx={{ color: 'text.secondary', flexGrow: 1 }}>{item.label}</Box>

                        </Stack>
                    ))}
                </Stack>
            </div>
        </div>

    );
}

CaseProgress.propTypes = {
    chart: PropTypes.object,
    subheader: PropTypes.string,
    title: PropTypes.string,
};
