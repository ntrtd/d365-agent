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
import { RetailPackagePurchases } from './RetailPackagePurchases';

/**
 * Request builder class for operations supported on the {@link RetailPackagePurchases} entity.
 */
export class RetailPackagePurchasesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailPackagePurchases<T>, T> {
  /**
   * Returns a request builder for querying all `RetailPackagePurchases` entities.
   * @returns A request builder for creating requests to retrieve all `RetailPackagePurchases` entities.
   */
  getAll(): GetAllRequestBuilder<RetailPackagePurchases<T>, T> {
    return new GetAllRequestBuilder<RetailPackagePurchases<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailPackagePurchases` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailPackagePurchases`.
   */
  create(
    entity: RetailPackagePurchases<T>
  ): CreateRequestBuilder<RetailPackagePurchases<T>, T> {
    return new CreateRequestBuilder<RetailPackagePurchases<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailPackagePurchases` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailPackagePurchases.dataAreaId}.
   * @param purchaseId Key property. See {@link RetailPackagePurchases.purchaseId}.
   * @param packageId Key property. See {@link RetailPackagePurchases.packageId}.
   * @param lineNumber Key property. See {@link RetailPackagePurchases.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailPackagePurchases` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseId: DeserializedType<T, 'Edm.String'>,
    packageId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailPackagePurchases<T>, T> {
    return new GetByKeyRequestBuilder<RetailPackagePurchases<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchaseId: purchaseId,
        PackageId: packageId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailPackagePurchases`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailPackagePurchases`.
   */
  update(
    entity: RetailPackagePurchases<T>
  ): UpdateRequestBuilder<RetailPackagePurchases<T>, T> {
    return new UpdateRequestBuilder<RetailPackagePurchases<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailPackagePurchases`.
   * @param dataAreaId Key property. See {@link RetailPackagePurchases.dataAreaId}.
   * @param purchaseId Key property. See {@link RetailPackagePurchases.purchaseId}.
   * @param packageId Key property. See {@link RetailPackagePurchases.packageId}.
   * @param lineNumber Key property. See {@link RetailPackagePurchases.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailPackagePurchases`.
   */
  delete(
    dataAreaId: string,
    purchaseId: string,
    packageId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RetailPackagePurchases<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailPackagePurchases`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailPackagePurchases` by taking the entity as a parameter.
   */
  delete(
    entity: RetailPackagePurchases<T>
  ): DeleteRequestBuilder<RetailPackagePurchases<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseId?: string,
    packageId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RetailPackagePurchases<T>, T> {
    return new DeleteRequestBuilder<RetailPackagePurchases<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailPackagePurchases
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseId: purchaseId!,
            PackageId: packageId!,
            LineNumber: lineNumber!
          }
    );
  }
}
