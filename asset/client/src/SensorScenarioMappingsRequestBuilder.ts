/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { SensorScenarioMappings } from './SensorScenarioMappings';
import { IoTIntCoreScenarioType } from './IoTIntCoreScenarioType';

/**
 * Request builder class for operations supported on the {@link SensorScenarioMappings} entity.
 */
export class SensorScenarioMappingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SensorScenarioMappings<T>, T> {
  /**
   * Returns a request builder for querying all `SensorScenarioMappings` entities.
   * @returns A request builder for creating requests to retrieve all `SensorScenarioMappings` entities.
   */
  getAll(): GetAllRequestBuilder<SensorScenarioMappings<T>, T> {
    return new GetAllRequestBuilder<SensorScenarioMappings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SensorScenarioMappings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SensorScenarioMappings`.
   */
  create(
    entity: SensorScenarioMappings<T>
  ): CreateRequestBuilder<SensorScenarioMappings<T>, T> {
    return new CreateRequestBuilder<SensorScenarioMappings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SensorScenarioMappings` entity based on its keys.
   * @param sensorId Key property. See {@link SensorScenarioMappings.sensorId}.
   * @param scenario Key property. See {@link SensorScenarioMappings.scenario}.
   * @returns A request builder for creating requests to retrieve one `SensorScenarioMappings` entity based on its keys.
   */
  getByKey(
    sensorId: DeserializedType<T, 'Edm.String'>,
    scenario: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.IoTIntCoreScenarioType'
    >
  ): GetByKeyRequestBuilder<SensorScenarioMappings<T>, T> {
    return new GetByKeyRequestBuilder<SensorScenarioMappings<T>, T>(
      this.entityApi,
      {
        SensorId: sensorId,
        Scenario: scenario
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SensorScenarioMappings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SensorScenarioMappings`.
   */
  update(
    entity: SensorScenarioMappings<T>
  ): UpdateRequestBuilder<SensorScenarioMappings<T>, T> {
    return new UpdateRequestBuilder<SensorScenarioMappings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SensorScenarioMappings`.
   * @param sensorId Key property. See {@link SensorScenarioMappings.sensorId}.
   * @param scenario Key property. See {@link SensorScenarioMappings.scenario}.
   * @returns A request builder for creating requests that delete an entity of type `SensorScenarioMappings`.
   */
  delete(
    sensorId: string,
    scenario: IoTIntCoreScenarioType
  ): DeleteRequestBuilder<SensorScenarioMappings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SensorScenarioMappings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SensorScenarioMappings` by taking the entity as a parameter.
   */
  delete(
    entity: SensorScenarioMappings<T>
  ): DeleteRequestBuilder<SensorScenarioMappings<T>, T>;
  delete(
    sensorIdOrEntity: any,
    scenario?: IoTIntCoreScenarioType
  ): DeleteRequestBuilder<SensorScenarioMappings<T>, T> {
    return new DeleteRequestBuilder<SensorScenarioMappings<T>, T>(
      this.entityApi,
      sensorIdOrEntity instanceof SensorScenarioMappings
        ? sensorIdOrEntity
        : {
            SensorId: sensorIdOrEntity!,
            Scenario: scenario!
          }
    );
  }
}
