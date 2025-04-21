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
import { AllocationRules } from './AllocationRules';

/**
 * Request builder class for operations supported on the {@link AllocationRules} entity.
 */
export class AllocationRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AllocationRules<T>, T> {
  /**
   * Returns a request builder for querying all `AllocationRules` entities.
   * @returns A request builder for creating requests to retrieve all `AllocationRules` entities.
   */
  getAll(): GetAllRequestBuilder<AllocationRules<T>, T> {
    return new GetAllRequestBuilder<AllocationRules<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AllocationRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AllocationRules`.
   */
  create(
    entity: AllocationRules<T>
  ): CreateRequestBuilder<AllocationRules<T>, T> {
    return new CreateRequestBuilder<AllocationRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AllocationRules` entity based on its keys.
   * @param dataAreaId Key property. See {@link AllocationRules.dataAreaId}.
   * @param rule Key property. See {@link AllocationRules.rule}.
   * @returns A request builder for creating requests to retrieve one `AllocationRules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rule: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AllocationRules<T>, T> {
    return new GetByKeyRequestBuilder<AllocationRules<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Rule: rule
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AllocationRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AllocationRules`.
   */
  update(
    entity: AllocationRules<T>
  ): UpdateRequestBuilder<AllocationRules<T>, T> {
    return new UpdateRequestBuilder<AllocationRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AllocationRules`.
   * @param dataAreaId Key property. See {@link AllocationRules.dataAreaId}.
   * @param rule Key property. See {@link AllocationRules.rule}.
   * @returns A request builder for creating requests that delete an entity of type `AllocationRules`.
   */
  delete(
    dataAreaId: string,
    rule: string
  ): DeleteRequestBuilder<AllocationRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AllocationRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AllocationRules` by taking the entity as a parameter.
   */
  delete(
    entity: AllocationRules<T>
  ): DeleteRequestBuilder<AllocationRules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rule?: string
  ): DeleteRequestBuilder<AllocationRules<T>, T> {
    return new DeleteRequestBuilder<AllocationRules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AllocationRules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Rule: rule!
          }
    );
  }
}
