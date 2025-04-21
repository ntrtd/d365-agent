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
import { VendPriceAdmTrans } from './VendPriceAdmTrans';

/**
 * Request builder class for operations supported on the {@link VendPriceAdmTrans} entity.
 */
export class VendPriceAdmTransRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendPriceAdmTrans<T>, T> {
  /**
   * Returns a request builder for querying all `VendPriceAdmTrans` entities.
   * @returns A request builder for creating requests to retrieve all `VendPriceAdmTrans` entities.
   */
  getAll(): GetAllRequestBuilder<VendPriceAdmTrans<T>, T> {
    return new GetAllRequestBuilder<VendPriceAdmTrans<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendPriceAdmTrans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendPriceAdmTrans`.
   */
  create(
    entity: VendPriceAdmTrans<T>
  ): CreateRequestBuilder<VendPriceAdmTrans<T>, T> {
    return new CreateRequestBuilder<VendPriceAdmTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendPriceAdmTrans` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendPriceAdmTrans.dataAreaId}.
   * @param journalNum Key property. See {@link VendPriceAdmTrans.journalNum}.
   * @param lineNum Key property. See {@link VendPriceAdmTrans.lineNum}.
   * @returns A request builder for creating requests to retrieve one `VendPriceAdmTrans` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNum: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<VendPriceAdmTrans<T>, T> {
    return new GetByKeyRequestBuilder<VendPriceAdmTrans<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalNum: journalNum,
      LineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VendPriceAdmTrans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendPriceAdmTrans`.
   */
  update(
    entity: VendPriceAdmTrans<T>
  ): UpdateRequestBuilder<VendPriceAdmTrans<T>, T> {
    return new UpdateRequestBuilder<VendPriceAdmTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendPriceAdmTrans`.
   * @param dataAreaId Key property. See {@link VendPriceAdmTrans.dataAreaId}.
   * @param journalNum Key property. See {@link VendPriceAdmTrans.journalNum}.
   * @param lineNum Key property. See {@link VendPriceAdmTrans.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `VendPriceAdmTrans`.
   */
  delete(
    dataAreaId: string,
    journalNum: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<VendPriceAdmTrans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendPriceAdmTrans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendPriceAdmTrans` by taking the entity as a parameter.
   */
  delete(
    entity: VendPriceAdmTrans<T>
  ): DeleteRequestBuilder<VendPriceAdmTrans<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNum?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<VendPriceAdmTrans<T>, T> {
    return new DeleteRequestBuilder<VendPriceAdmTrans<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendPriceAdmTrans
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNum: journalNum!,
            LineNum: lineNum!
          }
    );
  }
}
