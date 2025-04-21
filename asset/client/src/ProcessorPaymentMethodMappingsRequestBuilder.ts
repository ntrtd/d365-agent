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
import { ProcessorPaymentMethodMappings } from './ProcessorPaymentMethodMappings';

/**
 * Request builder class for operations supported on the {@link ProcessorPaymentMethodMappings} entity.
 */
export class ProcessorPaymentMethodMappingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProcessorPaymentMethodMappings<T>, T> {
  /**
   * Returns a request builder for querying all `ProcessorPaymentMethodMappings` entities.
   * @returns A request builder for creating requests to retrieve all `ProcessorPaymentMethodMappings` entities.
   */
  getAll(): GetAllRequestBuilder<ProcessorPaymentMethodMappings<T>, T> {
    return new GetAllRequestBuilder<ProcessorPaymentMethodMappings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProcessorPaymentMethodMappings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProcessorPaymentMethodMappings`.
   */
  create(
    entity: ProcessorPaymentMethodMappings<T>
  ): CreateRequestBuilder<ProcessorPaymentMethodMappings<T>, T> {
    return new CreateRequestBuilder<ProcessorPaymentMethodMappings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProcessorPaymentMethodMappings` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProcessorPaymentMethodMappings.dataAreaId}.
   * @param connectorName Key property. See {@link ProcessorPaymentMethodMappings.connectorName}.
   * @param processorPaymentMethod Key property. See {@link ProcessorPaymentMethodMappings.processorPaymentMethod}.
   * @returns A request builder for creating requests to retrieve one `ProcessorPaymentMethodMappings` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    connectorName: DeserializedType<T, 'Edm.String'>,
    processorPaymentMethod: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProcessorPaymentMethodMappings<T>, T> {
    return new GetByKeyRequestBuilder<ProcessorPaymentMethodMappings<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ConnectorName: connectorName,
        ProcessorPaymentMethod: processorPaymentMethod
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProcessorPaymentMethodMappings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProcessorPaymentMethodMappings`.
   */
  update(
    entity: ProcessorPaymentMethodMappings<T>
  ): UpdateRequestBuilder<ProcessorPaymentMethodMappings<T>, T> {
    return new UpdateRequestBuilder<ProcessorPaymentMethodMappings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProcessorPaymentMethodMappings`.
   * @param dataAreaId Key property. See {@link ProcessorPaymentMethodMappings.dataAreaId}.
   * @param connectorName Key property. See {@link ProcessorPaymentMethodMappings.connectorName}.
   * @param processorPaymentMethod Key property. See {@link ProcessorPaymentMethodMappings.processorPaymentMethod}.
   * @returns A request builder for creating requests that delete an entity of type `ProcessorPaymentMethodMappings`.
   */
  delete(
    dataAreaId: string,
    connectorName: string,
    processorPaymentMethod: string
  ): DeleteRequestBuilder<ProcessorPaymentMethodMappings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProcessorPaymentMethodMappings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProcessorPaymentMethodMappings` by taking the entity as a parameter.
   */
  delete(
    entity: ProcessorPaymentMethodMappings<T>
  ): DeleteRequestBuilder<ProcessorPaymentMethodMappings<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    connectorName?: string,
    processorPaymentMethod?: string
  ): DeleteRequestBuilder<ProcessorPaymentMethodMappings<T>, T> {
    return new DeleteRequestBuilder<ProcessorPaymentMethodMappings<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProcessorPaymentMethodMappings
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ConnectorName: connectorName!,
            ProcessorPaymentMethod: processorPaymentMethod!
          }
    );
  }
}
