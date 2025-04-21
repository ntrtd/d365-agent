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
import { LtmDocumentClassificationSalesPointCaIs } from './LtmDocumentClassificationSalesPointCaIs';
import { LtmAccountType } from './LtmAccountType';

/**
 * Request builder class for operations supported on the {@link LtmDocumentClassificationSalesPointCaIs} entity.
 */
export class LtmDocumentClassificationSalesPointCaIsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmDocumentClassificationSalesPointCaIs<T>, T> {
  /**
   * Returns a request builder for querying all `LtmDocumentClassificationSalesPointCaIs` entities.
   * @returns A request builder for creating requests to retrieve all `LtmDocumentClassificationSalesPointCaIs` entities.
   */
  getAll(): GetAllRequestBuilder<
    LtmDocumentClassificationSalesPointCaIs<T>,
    T
  > {
    return new GetAllRequestBuilder<
      LtmDocumentClassificationSalesPointCaIs<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmDocumentClassificationSalesPointCaIs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmDocumentClassificationSalesPointCaIs`.
   */
  create(
    entity: LtmDocumentClassificationSalesPointCaIs<T>
  ): CreateRequestBuilder<LtmDocumentClassificationSalesPointCaIs<T>, T> {
    return new CreateRequestBuilder<
      LtmDocumentClassificationSalesPointCaIs<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `LtmDocumentClassificationSalesPointCaIs` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmDocumentClassificationSalesPointCaIs.dataAreaId}.
   * @param accountType Key property. See {@link LtmDocumentClassificationSalesPointCaIs.accountType}.
   * @param documentClassificationId Key property. See {@link LtmDocumentClassificationSalesPointCaIs.documentClassificationId}.
   * @param salesPointId Key property. See {@link LtmDocumentClassificationSalesPointCaIs.salesPointId}.
   * @param caiCae Key property. See {@link LtmDocumentClassificationSalesPointCaIs.caiCae}.
   * @returns A request builder for creating requests to retrieve one `LtmDocumentClassificationSalesPointCaIs` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LTMAccountType'
    >,
    documentClassificationId: DeserializedType<T, 'Edm.String'>,
    salesPointId: DeserializedType<T, 'Edm.String'>,
    caiCae: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmDocumentClassificationSalesPointCaIs<T>, T> {
    return new GetByKeyRequestBuilder<
      LtmDocumentClassificationSalesPointCaIs<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      AccountType: accountType,
      DocumentClassificationId: documentClassificationId,
      SalesPointId: salesPointId,
      CaiCae: caiCae
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LtmDocumentClassificationSalesPointCaIs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmDocumentClassificationSalesPointCaIs`.
   */
  update(
    entity: LtmDocumentClassificationSalesPointCaIs<T>
  ): UpdateRequestBuilder<LtmDocumentClassificationSalesPointCaIs<T>, T> {
    return new UpdateRequestBuilder<
      LtmDocumentClassificationSalesPointCaIs<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmDocumentClassificationSalesPointCaIs`.
   * @param dataAreaId Key property. See {@link LtmDocumentClassificationSalesPointCaIs.dataAreaId}.
   * @param accountType Key property. See {@link LtmDocumentClassificationSalesPointCaIs.accountType}.
   * @param documentClassificationId Key property. See {@link LtmDocumentClassificationSalesPointCaIs.documentClassificationId}.
   * @param salesPointId Key property. See {@link LtmDocumentClassificationSalesPointCaIs.salesPointId}.
   * @param caiCae Key property. See {@link LtmDocumentClassificationSalesPointCaIs.caiCae}.
   * @returns A request builder for creating requests that delete an entity of type `LtmDocumentClassificationSalesPointCaIs`.
   */
  delete(
    dataAreaId: string,
    accountType: LtmAccountType,
    documentClassificationId: string,
    salesPointId: string,
    caiCae: string
  ): DeleteRequestBuilder<LtmDocumentClassificationSalesPointCaIs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmDocumentClassificationSalesPointCaIs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmDocumentClassificationSalesPointCaIs` by taking the entity as a parameter.
   */
  delete(
    entity: LtmDocumentClassificationSalesPointCaIs<T>
  ): DeleteRequestBuilder<LtmDocumentClassificationSalesPointCaIs<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountType?: LtmAccountType,
    documentClassificationId?: string,
    salesPointId?: string,
    caiCae?: string
  ): DeleteRequestBuilder<LtmDocumentClassificationSalesPointCaIs<T>, T> {
    return new DeleteRequestBuilder<
      LtmDocumentClassificationSalesPointCaIs<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmDocumentClassificationSalesPointCaIs
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountType: accountType!,
            DocumentClassificationId: documentClassificationId!,
            SalesPointId: salesPointId!,
            CaiCae: caiCae!
          }
    );
  }
}
