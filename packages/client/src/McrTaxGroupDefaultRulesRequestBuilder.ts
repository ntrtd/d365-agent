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
import { McrTaxGroupDefaultRules } from './McrTaxGroupDefaultRules';

/**
 * Request builder class for operations supported on the {@link McrTaxGroupDefaultRules} entity.
 */
export class McrTaxGroupDefaultRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<McrTaxGroupDefaultRules<T>, T> {
  /**
   * Returns a request builder for querying all `McrTaxGroupDefaultRules` entities.
   * @returns A request builder for creating requests to retrieve all `McrTaxGroupDefaultRules` entities.
   */
  getAll(): GetAllRequestBuilder<McrTaxGroupDefaultRules<T>, T> {
    return new GetAllRequestBuilder<McrTaxGroupDefaultRules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `McrTaxGroupDefaultRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `McrTaxGroupDefaultRules`.
   */
  create(
    entity: McrTaxGroupDefaultRules<T>
  ): CreateRequestBuilder<McrTaxGroupDefaultRules<T>, T> {
    return new CreateRequestBuilder<McrTaxGroupDefaultRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `McrTaxGroupDefaultRules` entity based on its keys.
   * @param dataAreaId Key property. See {@link McrTaxGroupDefaultRules.dataAreaId}.
   * @param priority Key property. See {@link McrTaxGroupDefaultRules.priority}.
   * @returns A request builder for creating requests to retrieve one `McrTaxGroupDefaultRules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    priority: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<McrTaxGroupDefaultRules<T>, T> {
    return new GetByKeyRequestBuilder<McrTaxGroupDefaultRules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Priority: priority
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `McrTaxGroupDefaultRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `McrTaxGroupDefaultRules`.
   */
  update(
    entity: McrTaxGroupDefaultRules<T>
  ): UpdateRequestBuilder<McrTaxGroupDefaultRules<T>, T> {
    return new UpdateRequestBuilder<McrTaxGroupDefaultRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `McrTaxGroupDefaultRules`.
   * @param dataAreaId Key property. See {@link McrTaxGroupDefaultRules.dataAreaId}.
   * @param priority Key property. See {@link McrTaxGroupDefaultRules.priority}.
   * @returns A request builder for creating requests that delete an entity of type `McrTaxGroupDefaultRules`.
   */
  delete(
    dataAreaId: string,
    priority: number
  ): DeleteRequestBuilder<McrTaxGroupDefaultRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `McrTaxGroupDefaultRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `McrTaxGroupDefaultRules` by taking the entity as a parameter.
   */
  delete(
    entity: McrTaxGroupDefaultRules<T>
  ): DeleteRequestBuilder<McrTaxGroupDefaultRules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    priority?: number
  ): DeleteRequestBuilder<McrTaxGroupDefaultRules<T>, T> {
    return new DeleteRequestBuilder<McrTaxGroupDefaultRules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof McrTaxGroupDefaultRules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Priority: priority!
          }
    );
  }
}
