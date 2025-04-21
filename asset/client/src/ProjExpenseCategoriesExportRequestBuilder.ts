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
import { ProjExpenseCategoriesExport } from './ProjExpenseCategoriesExport';

/**
 * Request builder class for operations supported on the {@link ProjExpenseCategoriesExport} entity.
 */
export class ProjExpenseCategoriesExportRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjExpenseCategoriesExport<T>, T> {
  /**
   * Returns a request builder for querying all `ProjExpenseCategoriesExport` entities.
   * @returns A request builder for creating requests to retrieve all `ProjExpenseCategoriesExport` entities.
   */
  getAll(): GetAllRequestBuilder<ProjExpenseCategoriesExport<T>, T> {
    return new GetAllRequestBuilder<ProjExpenseCategoriesExport<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjExpenseCategoriesExport` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjExpenseCategoriesExport`.
   */
  create(
    entity: ProjExpenseCategoriesExport<T>
  ): CreateRequestBuilder<ProjExpenseCategoriesExport<T>, T> {
    return new CreateRequestBuilder<ProjExpenseCategoriesExport<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjExpenseCategoriesExport` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjExpenseCategoriesExport.dataAreaId}.
   * @param costType Key property. See {@link ProjExpenseCategoriesExport.costType}.
   * @returns A request builder for creating requests to retrieve one `ProjExpenseCategoriesExport` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    costType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjExpenseCategoriesExport<T>, T> {
    return new GetByKeyRequestBuilder<ProjExpenseCategoriesExport<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CostType: costType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjExpenseCategoriesExport`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjExpenseCategoriesExport`.
   */
  update(
    entity: ProjExpenseCategoriesExport<T>
  ): UpdateRequestBuilder<ProjExpenseCategoriesExport<T>, T> {
    return new UpdateRequestBuilder<ProjExpenseCategoriesExport<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjExpenseCategoriesExport`.
   * @param dataAreaId Key property. See {@link ProjExpenseCategoriesExport.dataAreaId}.
   * @param costType Key property. See {@link ProjExpenseCategoriesExport.costType}.
   * @returns A request builder for creating requests that delete an entity of type `ProjExpenseCategoriesExport`.
   */
  delete(
    dataAreaId: string,
    costType: string
  ): DeleteRequestBuilder<ProjExpenseCategoriesExport<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjExpenseCategoriesExport`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjExpenseCategoriesExport` by taking the entity as a parameter.
   */
  delete(
    entity: ProjExpenseCategoriesExport<T>
  ): DeleteRequestBuilder<ProjExpenseCategoriesExport<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    costType?: string
  ): DeleteRequestBuilder<ProjExpenseCategoriesExport<T>, T> {
    return new DeleteRequestBuilder<ProjExpenseCategoriesExport<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjExpenseCategoriesExport
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CostType: costType!
          }
    );
  }
}
