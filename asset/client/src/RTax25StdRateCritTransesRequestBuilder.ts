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
import { RTax25StdRateCritTranses } from './RTax25StdRateCritTranses';

/**
 * Request builder class for operations supported on the {@link RTax25StdRateCritTranses} entity.
 */
export class RTax25StdRateCritTransesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RTax25StdRateCritTranses<T>, T> {
  /**
   * Returns a request builder for querying all `RTax25StdRateCritTranses` entities.
   * @returns A request builder for creating requests to retrieve all `RTax25StdRateCritTranses` entities.
   */
  getAll(): GetAllRequestBuilder<RTax25StdRateCritTranses<T>, T> {
    return new GetAllRequestBuilder<RTax25StdRateCritTranses<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RTax25StdRateCritTranses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RTax25StdRateCritTranses`.
   */
  create(
    entity: RTax25StdRateCritTranses<T>
  ): CreateRequestBuilder<RTax25StdRateCritTranses<T>, T> {
    return new CreateRequestBuilder<RTax25StdRateCritTranses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RTax25StdRateCritTranses` entity based on its keys.
   * @param dataAreaId Key property. See {@link RTax25StdRateCritTranses.dataAreaId}.
   * @param rateTransLineId Key property. See {@link RTax25StdRateCritTranses.rateTransLineId}.
   * @param forAmount Key property. See {@link RTax25StdRateCritTranses.forAmount}.
   * @returns A request builder for creating requests to retrieve one `RTax25StdRateCritTranses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rateTransLineId: DeserializedType<T, 'Edm.Guid'>,
    forAmount: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RTax25StdRateCritTranses<T>, T> {
    return new GetByKeyRequestBuilder<RTax25StdRateCritTranses<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RateTransLineId: rateTransLineId,
        ForAmount: forAmount
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RTax25StdRateCritTranses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RTax25StdRateCritTranses`.
   */
  update(
    entity: RTax25StdRateCritTranses<T>
  ): UpdateRequestBuilder<RTax25StdRateCritTranses<T>, T> {
    return new UpdateRequestBuilder<RTax25StdRateCritTranses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RTax25StdRateCritTranses`.
   * @param dataAreaId Key property. See {@link RTax25StdRateCritTranses.dataAreaId}.
   * @param rateTransLineId Key property. See {@link RTax25StdRateCritTranses.rateTransLineId}.
   * @param forAmount Key property. See {@link RTax25StdRateCritTranses.forAmount}.
   * @returns A request builder for creating requests that delete an entity of type `RTax25StdRateCritTranses`.
   */
  delete(
    dataAreaId: string,
    rateTransLineId: string,
    forAmount: BigNumber
  ): DeleteRequestBuilder<RTax25StdRateCritTranses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RTax25StdRateCritTranses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RTax25StdRateCritTranses` by taking the entity as a parameter.
   */
  delete(
    entity: RTax25StdRateCritTranses<T>
  ): DeleteRequestBuilder<RTax25StdRateCritTranses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rateTransLineId?: string,
    forAmount?: BigNumber
  ): DeleteRequestBuilder<RTax25StdRateCritTranses<T>, T> {
    return new DeleteRequestBuilder<RTax25StdRateCritTranses<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RTax25StdRateCritTranses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RateTransLineId: rateTransLineId!,
            ForAmount: forAmount!
          }
    );
  }
}
