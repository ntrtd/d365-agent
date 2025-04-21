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
import { LtmDocumentClassificationSalesPoints } from './LtmDocumentClassificationSalesPoints';
import { LtmAccountType } from './LtmAccountType';

/**
 * Request builder class for operations supported on the {@link LtmDocumentClassificationSalesPoints} entity.
 */
export class LtmDocumentClassificationSalesPointsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmDocumentClassificationSalesPoints<T>, T> {
  /**
   * Returns a request builder for querying all `LtmDocumentClassificationSalesPoints` entities.
   * @returns A request builder for creating requests to retrieve all `LtmDocumentClassificationSalesPoints` entities.
   */
  getAll(): GetAllRequestBuilder<LtmDocumentClassificationSalesPoints<T>, T> {
    return new GetAllRequestBuilder<LtmDocumentClassificationSalesPoints<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LtmDocumentClassificationSalesPoints` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmDocumentClassificationSalesPoints`.
   */
  create(
    entity: LtmDocumentClassificationSalesPoints<T>
  ): CreateRequestBuilder<LtmDocumentClassificationSalesPoints<T>, T> {
    return new CreateRequestBuilder<LtmDocumentClassificationSalesPoints<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmDocumentClassificationSalesPoints` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmDocumentClassificationSalesPoints.dataAreaId}.
   * @param salesPointId Key property. See {@link LtmDocumentClassificationSalesPoints.salesPointId}.
   * @param accountType Key property. See {@link LtmDocumentClassificationSalesPoints.accountType}.
   * @param documentClassificationId Key property. See {@link LtmDocumentClassificationSalesPoints.documentClassificationId}.
   * @returns A request builder for creating requests to retrieve one `LtmDocumentClassificationSalesPoints` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesPointId: DeserializedType<T, 'Edm.String'>,
    accountType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LTMAccountType'
    >,
    documentClassificationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmDocumentClassificationSalesPoints<T>, T> {
    return new GetByKeyRequestBuilder<
      LtmDocumentClassificationSalesPoints<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SalesPointId: salesPointId,
      AccountType: accountType,
      DocumentClassificationId: documentClassificationId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LtmDocumentClassificationSalesPoints`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmDocumentClassificationSalesPoints`.
   */
  update(
    entity: LtmDocumentClassificationSalesPoints<T>
  ): UpdateRequestBuilder<LtmDocumentClassificationSalesPoints<T>, T> {
    return new UpdateRequestBuilder<LtmDocumentClassificationSalesPoints<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmDocumentClassificationSalesPoints`.
   * @param dataAreaId Key property. See {@link LtmDocumentClassificationSalesPoints.dataAreaId}.
   * @param salesPointId Key property. See {@link LtmDocumentClassificationSalesPoints.salesPointId}.
   * @param accountType Key property. See {@link LtmDocumentClassificationSalesPoints.accountType}.
   * @param documentClassificationId Key property. See {@link LtmDocumentClassificationSalesPoints.documentClassificationId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmDocumentClassificationSalesPoints`.
   */
  delete(
    dataAreaId: string,
    salesPointId: string,
    accountType: LtmAccountType,
    documentClassificationId: string
  ): DeleteRequestBuilder<LtmDocumentClassificationSalesPoints<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmDocumentClassificationSalesPoints`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmDocumentClassificationSalesPoints` by taking the entity as a parameter.
   */
  delete(
    entity: LtmDocumentClassificationSalesPoints<T>
  ): DeleteRequestBuilder<LtmDocumentClassificationSalesPoints<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesPointId?: string,
    accountType?: LtmAccountType,
    documentClassificationId?: string
  ): DeleteRequestBuilder<LtmDocumentClassificationSalesPoints<T>, T> {
    return new DeleteRequestBuilder<LtmDocumentClassificationSalesPoints<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmDocumentClassificationSalesPoints
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesPointId: salesPointId!,
            AccountType: accountType!,
            DocumentClassificationId: documentClassificationId!
          }
    );
  }
}
