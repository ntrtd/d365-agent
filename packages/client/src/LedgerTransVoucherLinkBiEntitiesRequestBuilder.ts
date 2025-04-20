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
import { LedgerTransVoucherLinkBiEntities } from './LedgerTransVoucherLinkBiEntities';

/**
 * Request builder class for operations supported on the {@link LedgerTransVoucherLinkBiEntities} entity.
 */
export class LedgerTransVoucherLinkBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerTransVoucherLinkBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerTransVoucherLinkBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerTransVoucherLinkBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerTransVoucherLinkBiEntities<T>, T> {
    return new GetAllRequestBuilder<LedgerTransVoucherLinkBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerTransVoucherLinkBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerTransVoucherLinkBiEntities`.
   */
  create(
    entity: LedgerTransVoucherLinkBiEntities<T>
  ): CreateRequestBuilder<LedgerTransVoucherLinkBiEntities<T>, T> {
    return new CreateRequestBuilder<LedgerTransVoucherLinkBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerTransVoucherLinkBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerTransVoucherLinkBiEntities.dataAreaId}.
   * @param voucher Key property. See {@link LedgerTransVoucherLinkBiEntities.voucher}.
   * @param transDate Key property. See {@link LedgerTransVoucherLinkBiEntities.transDate}.
   * @returns A request builder for creating requests to retrieve one `LedgerTransVoucherLinkBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    voucher: DeserializedType<T, 'Edm.String'>,
    transDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<LedgerTransVoucherLinkBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<LedgerTransVoucherLinkBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Voucher: voucher,
        TransDate: transDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerTransVoucherLinkBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerTransVoucherLinkBiEntities`.
   */
  update(
    entity: LedgerTransVoucherLinkBiEntities<T>
  ): UpdateRequestBuilder<LedgerTransVoucherLinkBiEntities<T>, T> {
    return new UpdateRequestBuilder<LedgerTransVoucherLinkBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerTransVoucherLinkBiEntities`.
   * @param dataAreaId Key property. See {@link LedgerTransVoucherLinkBiEntities.dataAreaId}.
   * @param voucher Key property. See {@link LedgerTransVoucherLinkBiEntities.voucher}.
   * @param transDate Key property. See {@link LedgerTransVoucherLinkBiEntities.transDate}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerTransVoucherLinkBiEntities`.
   */
  delete(
    dataAreaId: string,
    voucher: string,
    transDate: Moment
  ): DeleteRequestBuilder<LedgerTransVoucherLinkBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerTransVoucherLinkBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerTransVoucherLinkBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerTransVoucherLinkBiEntities<T>
  ): DeleteRequestBuilder<LedgerTransVoucherLinkBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    voucher?: string,
    transDate?: Moment
  ): DeleteRequestBuilder<LedgerTransVoucherLinkBiEntities<T>, T> {
    return new DeleteRequestBuilder<LedgerTransVoucherLinkBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerTransVoucherLinkBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Voucher: voucher!,
            TransDate: transDate!
          }
    );
  }
}
