using System.Collections.Generic;
using spatemplate.Models;

namespace spatemplate.Providers
{
    public interface IWeatherProvider
    {
        List<WeatherForecast> GetForecasts();
    }
}
