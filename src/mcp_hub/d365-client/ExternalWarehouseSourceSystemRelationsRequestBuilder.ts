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
import { ExternalWarehouseSourceSystemRelations } from './ExternalWarehouseSourceSystemRelations';

/**
 * Request builder class for operations supported on the {@link ExternalWarehouseSourceSystemRelations} entity.
 */
export class ExternalWarehouseSourceSystemRelationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExternalWarehouseSourceSystemRelations<T>, T> {
  /**
   * Returns a request builder for querying all `ExternalWarehouseSourceSystemRelations` entities.
   * @returns A request builder for creating requests to retrieve all `ExternalWarehouseSourceSystemRelations` entities.
   */
  getAll(): GetAllRequestBuilder<ExternalWarehouseSourceSystemRelations<T>, T> {
    return new GetAllRequestBuilder<
      ExternalWarehouseSourceSystemRelations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExternalWarehouseSourceSystemRelations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExternalWarehouseSourceSystemRelations`.
   */
  create(
    entity: ExternalWarehouseSourceSystemRelations<T>
  ): CreateRequestBuilder<ExternalWarehouseSourceSystemRelations<T>, T> {
    return new CreateRequestBuilder<
      ExternalWarehouseSourceSystemRelations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ExternalWarehouseSourceSystemRelations` entity based on its keys.
   * @param sourceSystemId Key property. See {@link ExternalWarehouseSourceSystemRelations.sourceSystemId}.
   * @param warehouseLegalEntityId Key property. See {@link ExternalWarehouseSourceSystemRelations.warehouseLegalEntityId}.
   * @returns A request builder for creating requests to retrieve one `ExternalWarehouseSourceSystemRelations` entity based on its keys.
   */
  getByKey(
    sourceSystemId: DeserializedType<T, 'Edm.String'>,
    warehouseLegalEntityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExternalWarehouseSourceSystemRelations<T>, T> {
    return new GetByKeyRequestBuilder<
      ExternalWarehouseSourceSystemRelations<T>,
      T
    >(this.entityApi, {
      SourceSystemId: sourceSystemId,
      WarehouseLegalEntityId: warehouseLegalEntityId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ExternalWarehouseSourceSystemRelations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExternalWarehouseSourceSystemRelations`.
   */
  update(
    entity: ExternalWarehouseSourceSystemRelations<T>
  ): UpdateRequestBuilder<ExternalWarehouseSourceSystemRelations<T>, T> {
    return new UpdateRequestBuilder<
      ExternalWarehouseSourceSystemRelations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ExternalWarehouseSourceSystemRelations`.
   * @param sourceSystemId Key property. See {@link ExternalWarehouseSourceSystemRelations.sourceSystemId}.
   * @param warehouseLegalEntityId Key property. See {@link ExternalWarehouseSourceSystemRelations.warehouseLegalEntityId}.
   * @returns A request builder for creating requests that delete an entity of type `ExternalWarehouseSourceSystemRelations`.
   */
  delete(
    sourceSystemId: string,
    warehouseLegalEntityId: string
  ): DeleteRequestBuilder<ExternalWarehouseSourceSystemRelations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExternalWarehouseSourceSystemRelations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExternalWarehouseSourceSystemRelations` by taking the entity as a parameter.
   */
  delete(
    entity: ExternalWarehouseSourceSystemRelations<T>
  ): DeleteRequestBuilder<ExternalWarehouseSourceSystemRelations<T>, T>;
  delete(
    sourceSystemIdOrEntity: any,
    warehouseLegalEntityId?: string
  ): DeleteRequestBuilder<ExternalWarehouseSourceSystemRelations<T>, T> {
    return new DeleteRequestBuilder<
      ExternalWarehouseSourceSystemRelations<T>,
      T
    >(
      this.entityApi,
      sourceSystemIdOrEntity instanceof ExternalWarehouseSourceSystemRelations
        ? sourceSystemIdOrEntity
        : {
            SourceSystemId: sourceSystemIdOrEntity!,
            WarehouseLegalEntityId: warehouseLegalEntityId!
          }
    );
  }
}
