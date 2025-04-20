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
import { PositionDefaultDimensions } from './PositionDefaultDimensions';

/**
 * Request builder class for operations supported on the {@link PositionDefaultDimensions} entity.
 */
export class PositionDefaultDimensionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PositionDefaultDimensions<T>, T> {
  /**
   * Returns a request builder for querying all `PositionDefaultDimensions` entities.
   * @returns A request builder for creating requests to retrieve all `PositionDefaultDimensions` entities.
   */
  getAll(): GetAllRequestBuilder<PositionDefaultDimensions<T>, T> {
    return new GetAllRequestBuilder<PositionDefaultDimensions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PositionDefaultDimensions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PositionDefaultDimensions`.
   */
  create(
    entity: PositionDefaultDimensions<T>
  ): CreateRequestBuilder<PositionDefaultDimensions<T>, T> {
    return new CreateRequestBuilder<PositionDefaultDimensions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PositionDefaultDimensions` entity based on its keys.
   * @param dataAreaId Key property. See {@link PositionDefaultDimensions.dataAreaId}.
   * @param positionId Key property. See {@link PositionDefaultDimensions.positionId}.
   * @param legalEntityDataArea Key property. See {@link PositionDefaultDimensions.legalEntityDataArea}.
   * @returns A request builder for creating requests to retrieve one `PositionDefaultDimensions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    positionId: DeserializedType<T, 'Edm.String'>,
    legalEntityDataArea: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PositionDefaultDimensions<T>, T> {
    return new GetByKeyRequestBuilder<PositionDefaultDimensions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PositionId: positionId,
        LegalEntityDataArea: legalEntityDataArea
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PositionDefaultDimensions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PositionDefaultDimensions`.
   */
  update(
    entity: PositionDefaultDimensions<T>
  ): UpdateRequestBuilder<PositionDefaultDimensions<T>, T> {
    return new UpdateRequestBuilder<PositionDefaultDimensions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PositionDefaultDimensions`.
   * @param dataAreaId Key property. See {@link PositionDefaultDimensions.dataAreaId}.
   * @param positionId Key property. See {@link PositionDefaultDimensions.positionId}.
   * @param legalEntityDataArea Key property. See {@link PositionDefaultDimensions.legalEntityDataArea}.
   * @returns A request builder for creating requests that delete an entity of type `PositionDefaultDimensions`.
   */
  delete(
    dataAreaId: string,
    positionId: string,
    legalEntityDataArea: string
  ): DeleteRequestBuilder<PositionDefaultDimensions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PositionDefaultDimensions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PositionDefaultDimensions` by taking the entity as a parameter.
   */
  delete(
    entity: PositionDefaultDimensions<T>
  ): DeleteRequestBuilder<PositionDefaultDimensions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    positionId?: string,
    legalEntityDataArea?: string
  ): DeleteRequestBuilder<PositionDefaultDimensions<T>, T> {
    return new DeleteRequestBuilder<PositionDefaultDimensions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PositionDefaultDimensions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PositionId: positionId!,
            LegalEntityDataArea: legalEntityDataArea!
          }
    );
  }
}
