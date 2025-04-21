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
import { LtmVendorCaIs } from './LtmVendorCaIs';
import { NoYes } from './NoYes';

/**
 * Request builder class for operations supported on the {@link LtmVendorCaIs} entity.
 */
export class LtmVendorCaIsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmVendorCaIs<T>, T> {
  /**
   * Returns a request builder for querying all `LtmVendorCaIs` entities.
   * @returns A request builder for creating requests to retrieve all `LtmVendorCaIs` entities.
   */
  getAll(): GetAllRequestBuilder<LtmVendorCaIs<T>, T> {
    return new GetAllRequestBuilder<LtmVendorCaIs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmVendorCaIs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmVendorCaIs`.
   */
  create(entity: LtmVendorCaIs<T>): CreateRequestBuilder<LtmVendorCaIs<T>, T> {
    return new CreateRequestBuilder<LtmVendorCaIs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmVendorCaIs` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmVendorCaIs.dataAreaId}.
   * @param accountNum Key property. See {@link LtmVendorCaIs.accountNum}.
   * @param caiDateFrom Key property. See {@link LtmVendorCaIs.caiDateFrom}.
   * @param caiDateTo Key property. See {@link LtmVendorCaIs.caiDateTo}.
   * @param cai Key property. See {@link LtmVendorCaIs.cai}.
   * @param caiDocNumFrom Key property. See {@link LtmVendorCaIs.caiDocNumFrom}.
   * @param caiDocNumTo Key property. See {@link LtmVendorCaIs.caiDocNumTo}.
   * @param salesPointId Key property. See {@link LtmVendorCaIs.salesPointId}.
   * @param documentClassificationLetterId Key property. See {@link LtmVendorCaIs.documentClassificationLetterId}.
   * @param caiSuspended Key property. See {@link LtmVendorCaIs.caiSuspended}.
   * @returns A request builder for creating requests to retrieve one `LtmVendorCaIs` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountNum: DeserializedType<T, 'Edm.String'>,
    caiDateFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    caiDateTo: DeserializedType<T, 'Edm.DateTimeOffset'>,
    cai: DeserializedType<T, 'Edm.String'>,
    caiDocNumFrom: DeserializedType<T, 'Edm.String'>,
    caiDocNumTo: DeserializedType<T, 'Edm.String'>,
    salesPointId: DeserializedType<T, 'Edm.String'>,
    documentClassificationLetterId: DeserializedType<T, 'Edm.String'>,
    caiSuspended: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.NoYes'>
  ): GetByKeyRequestBuilder<LtmVendorCaIs<T>, T> {
    return new GetByKeyRequestBuilder<LtmVendorCaIs<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      AccountNum: accountNum,
      CAIDateFrom: caiDateFrom,
      CAIDateTo: caiDateTo,
      CAI: cai,
      CAIDocNumFrom: caiDocNumFrom,
      CAIDocNumTo: caiDocNumTo,
      SalesPointId: salesPointId,
      DocumentClassificationLetterId: documentClassificationLetterId,
      CAISuspended: caiSuspended
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LtmVendorCaIs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmVendorCaIs`.
   */
  update(entity: LtmVendorCaIs<T>): UpdateRequestBuilder<LtmVendorCaIs<T>, T> {
    return new UpdateRequestBuilder<LtmVendorCaIs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmVendorCaIs`.
   * @param dataAreaId Key property. See {@link LtmVendorCaIs.dataAreaId}.
   * @param accountNum Key property. See {@link LtmVendorCaIs.accountNum}.
   * @param caiDateFrom Key property. See {@link LtmVendorCaIs.caiDateFrom}.
   * @param caiDateTo Key property. See {@link LtmVendorCaIs.caiDateTo}.
   * @param cai Key property. See {@link LtmVendorCaIs.cai}.
   * @param caiDocNumFrom Key property. See {@link LtmVendorCaIs.caiDocNumFrom}.
   * @param caiDocNumTo Key property. See {@link LtmVendorCaIs.caiDocNumTo}.
   * @param salesPointId Key property. See {@link LtmVendorCaIs.salesPointId}.
   * @param documentClassificationLetterId Key property. See {@link LtmVendorCaIs.documentClassificationLetterId}.
   * @param caiSuspended Key property. See {@link LtmVendorCaIs.caiSuspended}.
   * @returns A request builder for creating requests that delete an entity of type `LtmVendorCaIs`.
   */
  delete(
    dataAreaId: string,
    accountNum: string,
    caiDateFrom: Moment,
    caiDateTo: Moment,
    cai: string,
    caiDocNumFrom: string,
    caiDocNumTo: string,
    salesPointId: string,
    documentClassificationLetterId: string,
    caiSuspended: NoYes
  ): DeleteRequestBuilder<LtmVendorCaIs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmVendorCaIs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmVendorCaIs` by taking the entity as a parameter.
   */
  delete(entity: LtmVendorCaIs<T>): DeleteRequestBuilder<LtmVendorCaIs<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountNum?: string,
    caiDateFrom?: Moment,
    caiDateTo?: Moment,
    cai?: string,
    caiDocNumFrom?: string,
    caiDocNumTo?: string,
    salesPointId?: string,
    documentClassificationLetterId?: string,
    caiSuspended?: NoYes
  ): DeleteRequestBuilder<LtmVendorCaIs<T>, T> {
    return new DeleteRequestBuilder<LtmVendorCaIs<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmVendorCaIs
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountNum: accountNum!,
            CAIDateFrom: caiDateFrom!,
            CAIDateTo: caiDateTo!,
            CAI: cai!,
            CAIDocNumFrom: caiDocNumFrom!,
            CAIDocNumTo: caiDocNumTo!,
            SalesPointId: salesPointId!,
            DocumentClassificationLetterId: documentClassificationLetterId!,
            CAISuspended: caiSuspended!
          }
    );
  }
}
