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
import { RAssetMoveHists } from './RAssetMoveHists';
import { RAssetMoveType } from './RAssetMoveType';

/**
 * Request builder class for operations supported on the {@link RAssetMoveHists} entity.
 */
export class RAssetMoveHistsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RAssetMoveHists<T>, T> {
  /**
   * Returns a request builder for querying all `RAssetMoveHists` entities.
   * @returns A request builder for creating requests to retrieve all `RAssetMoveHists` entities.
   */
  getAll(): GetAllRequestBuilder<RAssetMoveHists<T>, T> {
    return new GetAllRequestBuilder<RAssetMoveHists<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RAssetMoveHists` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RAssetMoveHists`.
   */
  create(
    entity: RAssetMoveHists<T>
  ): CreateRequestBuilder<RAssetMoveHists<T>, T> {
    return new CreateRequestBuilder<RAssetMoveHists<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RAssetMoveHists` entity based on its keys.
   * @param dataAreaId Key property. See {@link RAssetMoveHists.dataAreaId}.
   * @param faInventoryNumber Key property. See {@link RAssetMoveHists.faInventoryNumber}.
   * @param date Key property. See {@link RAssetMoveHists.date}.
   * @param typeOfTransfer Key property. See {@link RAssetMoveHists.typeOfTransfer}.
   * @returns A request builder for creating requests to retrieve one `RAssetMoveHists` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    faInventoryNumber: DeserializedType<T, 'Edm.String'>,
    date: DeserializedType<T, 'Edm.DateTimeOffset'>,
    typeOfTransfer: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RAssetMoveType'
    >
  ): GetByKeyRequestBuilder<RAssetMoveHists<T>, T> {
    return new GetByKeyRequestBuilder<RAssetMoveHists<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FAInventoryNumber: faInventoryNumber,
      Date: date,
      TypeOfTransfer: typeOfTransfer
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RAssetMoveHists`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RAssetMoveHists`.
   */
  update(
    entity: RAssetMoveHists<T>
  ): UpdateRequestBuilder<RAssetMoveHists<T>, T> {
    return new UpdateRequestBuilder<RAssetMoveHists<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RAssetMoveHists`.
   * @param dataAreaId Key property. See {@link RAssetMoveHists.dataAreaId}.
   * @param faInventoryNumber Key property. See {@link RAssetMoveHists.faInventoryNumber}.
   * @param date Key property. See {@link RAssetMoveHists.date}.
   * @param typeOfTransfer Key property. See {@link RAssetMoveHists.typeOfTransfer}.
   * @returns A request builder for creating requests that delete an entity of type `RAssetMoveHists`.
   */
  delete(
    dataAreaId: string,
    faInventoryNumber: string,
    date: Moment,
    typeOfTransfer: RAssetMoveType
  ): DeleteRequestBuilder<RAssetMoveHists<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RAssetMoveHists`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RAssetMoveHists` by taking the entity as a parameter.
   */
  delete(
    entity: RAssetMoveHists<T>
  ): DeleteRequestBuilder<RAssetMoveHists<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    faInventoryNumber?: string,
    date?: Moment,
    typeOfTransfer?: RAssetMoveType
  ): DeleteRequestBuilder<RAssetMoveHists<T>, T> {
    return new DeleteRequestBuilder<RAssetMoveHists<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RAssetMoveHists
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FAInventoryNumber: faInventoryNumber!,
            Date: date!,
            TypeOfTransfer: typeOfTransfer!
          }
    );
  }
}
