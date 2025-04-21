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
import { WarehouseIntegrationSourceSystemItems } from './WarehouseIntegrationSourceSystemItems';

/**
 * Request builder class for operations supported on the {@link WarehouseIntegrationSourceSystemItems} entity.
 */
export class WarehouseIntegrationSourceSystemItemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehouseIntegrationSourceSystemItems<T>, T> {
  /**
   * Returns a request builder for querying all `WarehouseIntegrationSourceSystemItems` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseIntegrationSourceSystemItems` entities.
   */
  getAll(): GetAllRequestBuilder<WarehouseIntegrationSourceSystemItems<T>, T> {
    return new GetAllRequestBuilder<
      WarehouseIntegrationSourceSystemItems<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WarehouseIntegrationSourceSystemItems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseIntegrationSourceSystemItems`.
   */
  create(
    entity: WarehouseIntegrationSourceSystemItems<T>
  ): CreateRequestBuilder<WarehouseIntegrationSourceSystemItems<T>, T> {
    return new CreateRequestBuilder<
      WarehouseIntegrationSourceSystemItems<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `WarehouseIntegrationSourceSystemItems` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehouseIntegrationSourceSystemItems.dataAreaId}.
   * @param sourceSystemId Key property. See {@link WarehouseIntegrationSourceSystemItems.sourceSystemId}.
   * @param sourceSystemItemNumber Key property. See {@link WarehouseIntegrationSourceSystemItems.sourceSystemItemNumber}.
   * @returns A request builder for creating requests to retrieve one `WarehouseIntegrationSourceSystemItems` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceSystemId: DeserializedType<T, 'Edm.String'>,
    sourceSystemItemNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WarehouseIntegrationSourceSystemItems<T>, T> {
    return new GetByKeyRequestBuilder<
      WarehouseIntegrationSourceSystemItems<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SourceSystemId: sourceSystemId,
      SourceSystemItemNumber: sourceSystemItemNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseIntegrationSourceSystemItems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseIntegrationSourceSystemItems`.
   */
  update(
    entity: WarehouseIntegrationSourceSystemItems<T>
  ): UpdateRequestBuilder<WarehouseIntegrationSourceSystemItems<T>, T> {
    return new UpdateRequestBuilder<
      WarehouseIntegrationSourceSystemItems<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseIntegrationSourceSystemItems`.
   * @param dataAreaId Key property. See {@link WarehouseIntegrationSourceSystemItems.dataAreaId}.
   * @param sourceSystemId Key property. See {@link WarehouseIntegrationSourceSystemItems.sourceSystemId}.
   * @param sourceSystemItemNumber Key property. See {@link WarehouseIntegrationSourceSystemItems.sourceSystemItemNumber}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseIntegrationSourceSystemItems`.
   */
  delete(
    dataAreaId: string,
    sourceSystemId: string,
    sourceSystemItemNumber: string
  ): DeleteRequestBuilder<WarehouseIntegrationSourceSystemItems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseIntegrationSourceSystemItems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseIntegrationSourceSystemItems` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseIntegrationSourceSystemItems<T>
  ): DeleteRequestBuilder<WarehouseIntegrationSourceSystemItems<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceSystemId?: string,
    sourceSystemItemNumber?: string
  ): DeleteRequestBuilder<WarehouseIntegrationSourceSystemItems<T>, T> {
    return new DeleteRequestBuilder<
      WarehouseIntegrationSourceSystemItems<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarehouseIntegrationSourceSystemItems
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceSystemId: sourceSystemId!,
            SourceSystemItemNumber: sourceSystemItemNumber!
          }
    );
  }
}
