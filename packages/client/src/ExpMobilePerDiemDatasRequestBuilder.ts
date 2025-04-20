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
import { ExpMobilePerDiemDatas } from './ExpMobilePerDiemDatas';

/**
 * Request builder class for operations supported on the {@link ExpMobilePerDiemDatas} entity.
 */
export class ExpMobilePerDiemDatasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpMobilePerDiemDatas<T>, T> {
  /**
   * Returns a request builder for querying all `ExpMobilePerDiemDatas` entities.
   * @returns A request builder for creating requests to retrieve all `ExpMobilePerDiemDatas` entities.
   */
  getAll(): GetAllRequestBuilder<ExpMobilePerDiemDatas<T>, T> {
    return new GetAllRequestBuilder<ExpMobilePerDiemDatas<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExpMobilePerDiemDatas` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpMobilePerDiemDatas`.
   */
  create(
    entity: ExpMobilePerDiemDatas<T>
  ): CreateRequestBuilder<ExpMobilePerDiemDatas<T>, T> {
    return new CreateRequestBuilder<ExpMobilePerDiemDatas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpMobilePerDiemDatas` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExpMobilePerDiemDatas.dataAreaId}.
   * @param entRecId Key property. See {@link ExpMobilePerDiemDatas.entRecId}.
   * @returns A request builder for creating requests to retrieve one `ExpMobilePerDiemDatas` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    entRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ExpMobilePerDiemDatas<T>, T> {
    return new GetByKeyRequestBuilder<ExpMobilePerDiemDatas<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        EntRecId: entRecId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpMobilePerDiemDatas`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpMobilePerDiemDatas`.
   */
  update(
    entity: ExpMobilePerDiemDatas<T>
  ): UpdateRequestBuilder<ExpMobilePerDiemDatas<T>, T> {
    return new UpdateRequestBuilder<ExpMobilePerDiemDatas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpMobilePerDiemDatas`.
   * @param dataAreaId Key property. See {@link ExpMobilePerDiemDatas.dataAreaId}.
   * @param entRecId Key property. See {@link ExpMobilePerDiemDatas.entRecId}.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobilePerDiemDatas`.
   */
  delete(
    dataAreaId: string,
    entRecId: BigNumber
  ): DeleteRequestBuilder<ExpMobilePerDiemDatas<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpMobilePerDiemDatas`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobilePerDiemDatas` by taking the entity as a parameter.
   */
  delete(
    entity: ExpMobilePerDiemDatas<T>
  ): DeleteRequestBuilder<ExpMobilePerDiemDatas<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    entRecId?: BigNumber
  ): DeleteRequestBuilder<ExpMobilePerDiemDatas<T>, T> {
    return new DeleteRequestBuilder<ExpMobilePerDiemDatas<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExpMobilePerDiemDatas
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EntRecId: entRecId!
          }
    );
  }
}
