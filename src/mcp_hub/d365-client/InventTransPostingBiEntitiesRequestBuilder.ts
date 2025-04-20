/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { InventTransPostingBiEntities } from './InventTransPostingBiEntities';
import { InventTransPostingType } from './InventTransPostingType';

/**
 * Request builder class for operations supported on the {@link InventTransPostingBiEntities} entity.
 */
export class InventTransPostingBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventTransPostingBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `InventTransPostingBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `InventTransPostingBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<InventTransPostingBiEntities<T>, T> {
    return new GetAllRequestBuilder<InventTransPostingBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventTransPostingBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventTransPostingBiEntities`.
   */
  create(
    entity: InventTransPostingBiEntities<T>
  ): CreateRequestBuilder<InventTransPostingBiEntities<T>, T> {
    return new CreateRequestBuilder<InventTransPostingBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventTransPostingBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventTransPostingBiEntities.dataAreaId}.
   * @param transDate Key property. See {@link InventTransPostingBiEntities.transDate}.
   * @param voucher Key property. See {@link InventTransPostingBiEntities.voucher}.
   * @param inventTransOrigin Key property. See {@link InventTransPostingBiEntities.inventTransOrigin}.
   * @param inventTransPostingType Key property. See {@link InventTransPostingBiEntities.inventTransPostingType}.
   * @returns A request builder for creating requests to retrieve one `InventTransPostingBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    voucher: DeserializedType<T, 'Edm.String'>,
    inventTransOrigin: DeserializedType<T, 'Edm.Int64'>,
    inventTransPostingType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.InventTransPostingType'
    >
  ): GetByKeyRequestBuilder<InventTransPostingBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<InventTransPostingBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransDate: transDate,
        Voucher: voucher,
        InventTransOrigin: inventTransOrigin,
        InventTransPostingType: inventTransPostingType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventTransPostingBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventTransPostingBiEntities`.
   */
  update(
    entity: InventTransPostingBiEntities<T>
  ): UpdateRequestBuilder<InventTransPostingBiEntities<T>, T> {
    return new UpdateRequestBuilder<InventTransPostingBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventTransPostingBiEntities`.
   * @param dataAreaId Key property. See {@link InventTransPostingBiEntities.dataAreaId}.
   * @param transDate Key property. See {@link InventTransPostingBiEntities.transDate}.
   * @param voucher Key property. See {@link InventTransPostingBiEntities.voucher}.
   * @param inventTransOrigin Key property. See {@link InventTransPostingBiEntities.inventTransOrigin}.
   * @param inventTransPostingType Key property. See {@link InventTransPostingBiEntities.inventTransPostingType}.
   * @returns A request builder for creating requests that delete an entity of type `InventTransPostingBiEntities`.
   */
  delete(
    dataAreaId: string,
    transDate: Moment,
    voucher: string,
    inventTransOrigin: BigNumber,
    inventTransPostingType: InventTransPostingType
  ): DeleteRequestBuilder<InventTransPostingBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventTransPostingBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventTransPostingBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: InventTransPostingBiEntities<T>
  ): DeleteRequestBuilder<InventTransPostingBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transDate?: Moment,
    voucher?: string,
    inventTransOrigin?: BigNumber,
    inventTransPostingType?: InventTransPostingType
  ): DeleteRequestBuilder<InventTransPostingBiEntities<T>, T> {
    return new DeleteRequestBuilder<InventTransPostingBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventTransPostingBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransDate: transDate!,
            Voucher: voucher!,
            InventTransOrigin: inventTransOrigin!,
            InventTransPostingType: inventTransPostingType!
          }
    );
  }
}
