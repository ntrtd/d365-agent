/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { StoreHoursRanges } from './StoreHoursRanges';

/**
 * Request builder class for operations supported on the {@link StoreHoursRanges} entity.
 */
export class StoreHoursRangesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<StoreHoursRanges<T>, T> {
  /**
   * Returns a request builder for querying all `StoreHoursRanges` entities.
   * @returns A request builder for creating requests to retrieve all `StoreHoursRanges` entities.
   */
  getAll(): GetAllRequestBuilder<StoreHoursRanges<T>, T> {
    return new GetAllRequestBuilder<StoreHoursRanges<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `StoreHoursRanges` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `StoreHoursRanges`.
   */
  create(
    entity: StoreHoursRanges<T>
  ): CreateRequestBuilder<StoreHoursRanges<T>, T> {
    return new CreateRequestBuilder<StoreHoursRanges<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `StoreHoursRanges` entity based on its keys.
   * @param dataAreaId Key property. See {@link StoreHoursRanges.dataAreaId}.
   * @param storeHoursTemplateId Key property. See {@link StoreHoursRanges.storeHoursTemplateId}.
   * @param lineNum Key property. See {@link StoreHoursRanges.lineNum}.
   * @returns A request builder for creating requests to retrieve one `StoreHoursRanges` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    storeHoursTemplateId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<StoreHoursRanges<T>, T> {
    return new GetByKeyRequestBuilder<StoreHoursRanges<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      StoreHoursTemplateId: storeHoursTemplateId,
      LineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `StoreHoursRanges`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `StoreHoursRanges`.
   */
  update(
    entity: StoreHoursRanges<T>
  ): UpdateRequestBuilder<StoreHoursRanges<T>, T> {
    return new UpdateRequestBuilder<StoreHoursRanges<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `StoreHoursRanges`.
   * @param dataAreaId Key property. See {@link StoreHoursRanges.dataAreaId}.
   * @param storeHoursTemplateId Key property. See {@link StoreHoursRanges.storeHoursTemplateId}.
   * @param lineNum Key property. See {@link StoreHoursRanges.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `StoreHoursRanges`.
   */
  delete(
    dataAreaId: string,
    storeHoursTemplateId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<StoreHoursRanges<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `StoreHoursRanges`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `StoreHoursRanges` by taking the entity as a parameter.
   */
  delete(
    entity: StoreHoursRanges<T>
  ): DeleteRequestBuilder<StoreHoursRanges<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    storeHoursTemplateId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<StoreHoursRanges<T>, T> {
    return new DeleteRequestBuilder<StoreHoursRanges<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof StoreHoursRanges
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StoreHoursTemplateId: storeHoursTemplateId!,
            LineNum: lineNum!
          }
    );
  }
}
