/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { RAssetLifeHists } from './RAssetLifeHists';

/**
 * Request builder class for operations supported on the {@link RAssetLifeHists} entity.
 */
export class RAssetLifeHistsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RAssetLifeHists<T>, T> {
  /**
   * Returns a request builder for querying all `RAssetLifeHists` entities.
   * @returns A request builder for creating requests to retrieve all `RAssetLifeHists` entities.
   */
  getAll(): GetAllRequestBuilder<RAssetLifeHists<T>, T> {
    return new GetAllRequestBuilder<RAssetLifeHists<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RAssetLifeHists` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RAssetLifeHists`.
   */
  create(
    entity: RAssetLifeHists<T>
  ): CreateRequestBuilder<RAssetLifeHists<T>, T> {
    return new CreateRequestBuilder<RAssetLifeHists<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RAssetLifeHists` entity based on its keys.
   * @param dataAreaId Key property. See {@link RAssetLifeHists.dataAreaId}.
   * @param faInventoryNumber Key property. See {@link RAssetLifeHists.faInventoryNumber}.
   * @param valueModel Key property. See {@link RAssetLifeHists.valueModel}.
   * @param date Key property. See {@link RAssetLifeHists.date}.
   * @returns A request builder for creating requests to retrieve one `RAssetLifeHists` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    faInventoryNumber: DeserializedType<T, 'Edm.String'>,
    valueModel: DeserializedType<T, 'Edm.String'>,
    date: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<RAssetLifeHists<T>, T> {
    return new GetByKeyRequestBuilder<RAssetLifeHists<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FAInventoryNumber: faInventoryNumber,
      ValueModel: valueModel,
      Date: date
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RAssetLifeHists`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RAssetLifeHists`.
   */
  update(
    entity: RAssetLifeHists<T>
  ): UpdateRequestBuilder<RAssetLifeHists<T>, T> {
    return new UpdateRequestBuilder<RAssetLifeHists<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RAssetLifeHists`.
   * @param dataAreaId Key property. See {@link RAssetLifeHists.dataAreaId}.
   * @param faInventoryNumber Key property. See {@link RAssetLifeHists.faInventoryNumber}.
   * @param valueModel Key property. See {@link RAssetLifeHists.valueModel}.
   * @param date Key property. See {@link RAssetLifeHists.date}.
   * @returns A request builder for creating requests that delete an entity of type `RAssetLifeHists`.
   */
  delete(
    dataAreaId: string,
    faInventoryNumber: string,
    valueModel: string,
    date: Moment
  ): DeleteRequestBuilder<RAssetLifeHists<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RAssetLifeHists`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RAssetLifeHists` by taking the entity as a parameter.
   */
  delete(
    entity: RAssetLifeHists<T>
  ): DeleteRequestBuilder<RAssetLifeHists<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    faInventoryNumber?: string,
    valueModel?: string,
    date?: Moment
  ): DeleteRequestBuilder<RAssetLifeHists<T>, T> {
    return new DeleteRequestBuilder<RAssetLifeHists<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RAssetLifeHists
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FAInventoryNumber: faInventoryNumber!,
            ValueModel: valueModel!,
            Date: date!
          }
    );
  }
}
