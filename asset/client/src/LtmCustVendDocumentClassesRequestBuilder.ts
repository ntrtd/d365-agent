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
import { LtmCustVendDocumentClasses } from './LtmCustVendDocumentClasses';
import { LtmCustVendEntity } from './LtmCustVendEntity';

/**
 * Request builder class for operations supported on the {@link LtmCustVendDocumentClasses} entity.
 */
export class LtmCustVendDocumentClassesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmCustVendDocumentClasses<T>, T> {
  /**
   * Returns a request builder for querying all `LtmCustVendDocumentClasses` entities.
   * @returns A request builder for creating requests to retrieve all `LtmCustVendDocumentClasses` entities.
   */
  getAll(): GetAllRequestBuilder<LtmCustVendDocumentClasses<T>, T> {
    return new GetAllRequestBuilder<LtmCustVendDocumentClasses<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LtmCustVendDocumentClasses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmCustVendDocumentClasses`.
   */
  create(
    entity: LtmCustVendDocumentClasses<T>
  ): CreateRequestBuilder<LtmCustVendDocumentClasses<T>, T> {
    return new CreateRequestBuilder<LtmCustVendDocumentClasses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmCustVendDocumentClasses` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmCustVendDocumentClasses.dataAreaId}.
   * @param documentClassificationId Key property. See {@link LtmCustVendDocumentClasses.documentClassificationId}.
   * @param accountTypeGroupId Key property. See {@link LtmCustVendDocumentClasses.accountTypeGroupId}.
   * @param custVendEntity Key property. See {@link LtmCustVendDocumentClasses.custVendEntity}.
   * @returns A request builder for creating requests to retrieve one `LtmCustVendDocumentClasses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentClassificationId: DeserializedType<T, 'Edm.String'>,
    accountTypeGroupId: DeserializedType<T, 'Edm.String'>,
    custVendEntity: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LTMCustVendEntity'
    >
  ): GetByKeyRequestBuilder<LtmCustVendDocumentClasses<T>, T> {
    return new GetByKeyRequestBuilder<LtmCustVendDocumentClasses<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DocumentClassificationId: documentClassificationId,
        AccountTypeGroupId: accountTypeGroupId,
        CustVendEntity: custVendEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmCustVendDocumentClasses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmCustVendDocumentClasses`.
   */
  update(
    entity: LtmCustVendDocumentClasses<T>
  ): UpdateRequestBuilder<LtmCustVendDocumentClasses<T>, T> {
    return new UpdateRequestBuilder<LtmCustVendDocumentClasses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmCustVendDocumentClasses`.
   * @param dataAreaId Key property. See {@link LtmCustVendDocumentClasses.dataAreaId}.
   * @param documentClassificationId Key property. See {@link LtmCustVendDocumentClasses.documentClassificationId}.
   * @param accountTypeGroupId Key property. See {@link LtmCustVendDocumentClasses.accountTypeGroupId}.
   * @param custVendEntity Key property. See {@link LtmCustVendDocumentClasses.custVendEntity}.
   * @returns A request builder for creating requests that delete an entity of type `LtmCustVendDocumentClasses`.
   */
  delete(
    dataAreaId: string,
    documentClassificationId: string,
    accountTypeGroupId: string,
    custVendEntity: LtmCustVendEntity
  ): DeleteRequestBuilder<LtmCustVendDocumentClasses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmCustVendDocumentClasses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmCustVendDocumentClasses` by taking the entity as a parameter.
   */
  delete(
    entity: LtmCustVendDocumentClasses<T>
  ): DeleteRequestBuilder<LtmCustVendDocumentClasses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentClassificationId?: string,
    accountTypeGroupId?: string,
    custVendEntity?: LtmCustVendEntity
  ): DeleteRequestBuilder<LtmCustVendDocumentClasses<T>, T> {
    return new DeleteRequestBuilder<LtmCustVendDocumentClasses<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmCustVendDocumentClasses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentClassificationId: documentClassificationId!,
            AccountTypeGroupId: accountTypeGroupId!,
            CustVendEntity: custVendEntity!
          }
    );
  }
}
