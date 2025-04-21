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
import { AllocationBasisRules } from './AllocationBasisRules';

/**
 * Request builder class for operations supported on the {@link AllocationBasisRules} entity.
 */
export class AllocationBasisRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AllocationBasisRules<T>, T> {
  /**
   * Returns a request builder for querying all `AllocationBasisRules` entities.
   * @returns A request builder for creating requests to retrieve all `AllocationBasisRules` entities.
   */
  getAll(): GetAllRequestBuilder<AllocationBasisRules<T>, T> {
    return new GetAllRequestBuilder<AllocationBasisRules<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AllocationBasisRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AllocationBasisRules`.
   */
  create(
    entity: AllocationBasisRules<T>
  ): CreateRequestBuilder<AllocationBasisRules<T>, T> {
    return new CreateRequestBuilder<AllocationBasisRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AllocationBasisRules` entity based on its keys.
   * @param dataAreaId Key property. See {@link AllocationBasisRules.dataAreaId}.
   * @param basisId Key property. See {@link AllocationBasisRules.basisId}.
   * @returns A request builder for creating requests to retrieve one `AllocationBasisRules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    basisId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AllocationBasisRules<T>, T> {
    return new GetByKeyRequestBuilder<AllocationBasisRules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BasisId: basisId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AllocationBasisRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AllocationBasisRules`.
   */
  update(
    entity: AllocationBasisRules<T>
  ): UpdateRequestBuilder<AllocationBasisRules<T>, T> {
    return new UpdateRequestBuilder<AllocationBasisRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AllocationBasisRules`.
   * @param dataAreaId Key property. See {@link AllocationBasisRules.dataAreaId}.
   * @param basisId Key property. See {@link AllocationBasisRules.basisId}.
   * @returns A request builder for creating requests that delete an entity of type `AllocationBasisRules`.
   */
  delete(
    dataAreaId: string,
    basisId: string
  ): DeleteRequestBuilder<AllocationBasisRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AllocationBasisRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AllocationBasisRules` by taking the entity as a parameter.
   */
  delete(
    entity: AllocationBasisRules<T>
  ): DeleteRequestBuilder<AllocationBasisRules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    basisId?: string
  ): DeleteRequestBuilder<AllocationBasisRules<T>, T> {
    return new DeleteRequestBuilder<AllocationBasisRules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AllocationBasisRules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BasisId: basisId!
          }
    );
  }
}
