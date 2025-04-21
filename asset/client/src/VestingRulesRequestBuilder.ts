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
import { VestingRules } from './VestingRules';

/**
 * Request builder class for operations supported on the {@link VestingRules} entity.
 */
export class VestingRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VestingRules<T>, T> {
  /**
   * Returns a request builder for querying all `VestingRules` entities.
   * @returns A request builder for creating requests to retrieve all `VestingRules` entities.
   */
  getAll(): GetAllRequestBuilder<VestingRules<T>, T> {
    return new GetAllRequestBuilder<VestingRules<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VestingRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VestingRules`.
   */
  create(entity: VestingRules<T>): CreateRequestBuilder<VestingRules<T>, T> {
    return new CreateRequestBuilder<VestingRules<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `VestingRules` entity based on its keys.
   * @param dataAreaId Key property. See {@link VestingRules.dataAreaId}.
   * @param vestingRule Key property. See {@link VestingRules.vestingRule}.
   * @returns A request builder for creating requests to retrieve one `VestingRules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vestingRule: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VestingRules<T>, T> {
    return new GetByKeyRequestBuilder<VestingRules<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      VestingRule: vestingRule
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VestingRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VestingRules`.
   */
  update(entity: VestingRules<T>): UpdateRequestBuilder<VestingRules<T>, T> {
    return new UpdateRequestBuilder<VestingRules<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `VestingRules`.
   * @param dataAreaId Key property. See {@link VestingRules.dataAreaId}.
   * @param vestingRule Key property. See {@link VestingRules.vestingRule}.
   * @returns A request builder for creating requests that delete an entity of type `VestingRules`.
   */
  delete(
    dataAreaId: string,
    vestingRule: string
  ): DeleteRequestBuilder<VestingRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VestingRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VestingRules` by taking the entity as a parameter.
   */
  delete(entity: VestingRules<T>): DeleteRequestBuilder<VestingRules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vestingRule?: string
  ): DeleteRequestBuilder<VestingRules<T>, T> {
    return new DeleteRequestBuilder<VestingRules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VestingRules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VestingRule: vestingRule!
          }
    );
  }
}
