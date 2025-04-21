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
import { DimensionRules } from './DimensionRules';

/**
 * Request builder class for operations supported on the {@link DimensionRules} entity.
 */
export class DimensionRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimensionRules<T>, T> {
  /**
   * Returns a request builder for querying all `DimensionRules` entities.
   * @returns A request builder for creating requests to retrieve all `DimensionRules` entities.
   */
  getAll(): GetAllRequestBuilder<DimensionRules<T>, T> {
    return new GetAllRequestBuilder<DimensionRules<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DimensionRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimensionRules`.
   */
  create(
    entity: DimensionRules<T>
  ): CreateRequestBuilder<DimensionRules<T>, T> {
    return new CreateRequestBuilder<DimensionRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimensionRules` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimensionRules.dataAreaId}.
   * @param lineId Key property. See {@link DimensionRules.lineId}.
   * @returns A request builder for creating requests to retrieve one `DimensionRules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<DimensionRules<T>, T> {
    return new GetByKeyRequestBuilder<DimensionRules<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      LineId: lineId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DimensionRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimensionRules`.
   */
  update(
    entity: DimensionRules<T>
  ): UpdateRequestBuilder<DimensionRules<T>, T> {
    return new UpdateRequestBuilder<DimensionRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimensionRules`.
   * @param dataAreaId Key property. See {@link DimensionRules.dataAreaId}.
   * @param lineId Key property. See {@link DimensionRules.lineId}.
   * @returns A request builder for creating requests that delete an entity of type `DimensionRules`.
   */
  delete(
    dataAreaId: string,
    lineId: string
  ): DeleteRequestBuilder<DimensionRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimensionRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimensionRules` by taking the entity as a parameter.
   */
  delete(entity: DimensionRules<T>): DeleteRequestBuilder<DimensionRules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineId?: string
  ): DeleteRequestBuilder<DimensionRules<T>, T> {
    return new DeleteRequestBuilder<DimensionRules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimensionRules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineId: lineId!
          }
    );
  }
}
