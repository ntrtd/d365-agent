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
import { LtmVendorCaiDocumentClasses } from './LtmVendorCaiDocumentClasses';

/**
 * Request builder class for operations supported on the {@link LtmVendorCaiDocumentClasses} entity.
 */
export class LtmVendorCaiDocumentClassesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmVendorCaiDocumentClasses<T>, T> {
  /**
   * Returns a request builder for querying all `LtmVendorCaiDocumentClasses` entities.
   * @returns A request builder for creating requests to retrieve all `LtmVendorCaiDocumentClasses` entities.
   */
  getAll(): GetAllRequestBuilder<LtmVendorCaiDocumentClasses<T>, T> {
    return new GetAllRequestBuilder<LtmVendorCaiDocumentClasses<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LtmVendorCaiDocumentClasses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmVendorCaiDocumentClasses`.
   */
  create(
    entity: LtmVendorCaiDocumentClasses<T>
  ): CreateRequestBuilder<LtmVendorCaiDocumentClasses<T>, T> {
    return new CreateRequestBuilder<LtmVendorCaiDocumentClasses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmVendorCaiDocumentClasses` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmVendorCaiDocumentClasses.dataAreaId}.
   * @param accountNum Key property. See {@link LtmVendorCaiDocumentClasses.accountNum}.
   * @param cai Key property. See {@link LtmVendorCaiDocumentClasses.cai}.
   * @param documentClassificationId Key property. See {@link LtmVendorCaiDocumentClasses.documentClassificationId}.
   * @returns A request builder for creating requests to retrieve one `LtmVendorCaiDocumentClasses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountNum: DeserializedType<T, 'Edm.String'>,
    cai: DeserializedType<T, 'Edm.String'>,
    documentClassificationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmVendorCaiDocumentClasses<T>, T> {
    return new GetByKeyRequestBuilder<LtmVendorCaiDocumentClasses<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AccountNum: accountNum,
        CAI: cai,
        DocumentClassificationId: documentClassificationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmVendorCaiDocumentClasses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmVendorCaiDocumentClasses`.
   */
  update(
    entity: LtmVendorCaiDocumentClasses<T>
  ): UpdateRequestBuilder<LtmVendorCaiDocumentClasses<T>, T> {
    return new UpdateRequestBuilder<LtmVendorCaiDocumentClasses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmVendorCaiDocumentClasses`.
   * @param dataAreaId Key property. See {@link LtmVendorCaiDocumentClasses.dataAreaId}.
   * @param accountNum Key property. See {@link LtmVendorCaiDocumentClasses.accountNum}.
   * @param cai Key property. See {@link LtmVendorCaiDocumentClasses.cai}.
   * @param documentClassificationId Key property. See {@link LtmVendorCaiDocumentClasses.documentClassificationId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmVendorCaiDocumentClasses`.
   */
  delete(
    dataAreaId: string,
    accountNum: string,
    cai: string,
    documentClassificationId: string
  ): DeleteRequestBuilder<LtmVendorCaiDocumentClasses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmVendorCaiDocumentClasses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmVendorCaiDocumentClasses` by taking the entity as a parameter.
   */
  delete(
    entity: LtmVendorCaiDocumentClasses<T>
  ): DeleteRequestBuilder<LtmVendorCaiDocumentClasses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountNum?: string,
    cai?: string,
    documentClassificationId?: string
  ): DeleteRequestBuilder<LtmVendorCaiDocumentClasses<T>, T> {
    return new DeleteRequestBuilder<LtmVendorCaiDocumentClasses<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmVendorCaiDocumentClasses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountNum: accountNum!,
            CAI: cai!,
            DocumentClassificationId: documentClassificationId!
          }
    );
  }
}
