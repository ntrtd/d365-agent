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
import { TransferPrices } from './TransferPrices';
import { ProjTransferPriceTransType } from './ProjTransferPriceTransType';

/**
 * Request builder class for operations supported on the {@link TransferPrices} entity.
 */
export class TransferPricesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransferPrices<T>, T> {
  /**
   * Returns a request builder for querying all `TransferPrices` entities.
   * @returns A request builder for creating requests to retrieve all `TransferPrices` entities.
   */
  getAll(): GetAllRequestBuilder<TransferPrices<T>, T> {
    return new GetAllRequestBuilder<TransferPrices<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TransferPrices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransferPrices`.
   */
  create(
    entity: TransferPrices<T>
  ): CreateRequestBuilder<TransferPrices<T>, T> {
    return new CreateRequestBuilder<TransferPrices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransferPrices` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransferPrices.dataAreaId}.
   * @param resourceId Key property. See {@link TransferPrices.resourceId}.
   * @param borrowingLegalEntity Key property. See {@link TransferPrices.borrowingLegalEntity}.
   * @param projectId Key property. See {@link TransferPrices.projectId}.
   * @param categoryId Key property. See {@link TransferPrices.categoryId}.
   * @param effectiveDate Key property. See {@link TransferPrices.effectiveDate}.
   * @param salesCurrency Key property. See {@link TransferPrices.salesCurrency}.
   * @param transactionType Key property. See {@link TransferPrices.transactionType}.
   * @param projectContractId Key property. See {@link TransferPrices.projectContractId}.
   * @param roleId Key property. See {@link TransferPrices.roleId}.
   * @returns A request builder for creating requests to retrieve one `TransferPrices` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    resourceId: DeserializedType<T, 'Edm.String'>,
    borrowingLegalEntity: DeserializedType<T, 'Edm.String'>,
    projectId: DeserializedType<T, 'Edm.String'>,
    categoryId: DeserializedType<T, 'Edm.String'>,
    effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    salesCurrency: DeserializedType<T, 'Edm.String'>,
    transactionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ProjTransferPriceTransType'
    >,
    projectContractId: DeserializedType<T, 'Edm.String'>,
    roleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TransferPrices<T>, T> {
    return new GetByKeyRequestBuilder<TransferPrices<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ResourceId: resourceId,
      BorrowingLegalEntity: borrowingLegalEntity,
      ProjectId: projectId,
      CategoryId: categoryId,
      EffectiveDate: effectiveDate,
      SalesCurrency: salesCurrency,
      TransactionType: transactionType,
      ProjectContractId: projectContractId,
      RoleId: roleId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TransferPrices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransferPrices`.
   */
  update(
    entity: TransferPrices<T>
  ): UpdateRequestBuilder<TransferPrices<T>, T> {
    return new UpdateRequestBuilder<TransferPrices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransferPrices`.
   * @param dataAreaId Key property. See {@link TransferPrices.dataAreaId}.
   * @param resourceId Key property. See {@link TransferPrices.resourceId}.
   * @param borrowingLegalEntity Key property. See {@link TransferPrices.borrowingLegalEntity}.
   * @param projectId Key property. See {@link TransferPrices.projectId}.
   * @param categoryId Key property. See {@link TransferPrices.categoryId}.
   * @param effectiveDate Key property. See {@link TransferPrices.effectiveDate}.
   * @param salesCurrency Key property. See {@link TransferPrices.salesCurrency}.
   * @param transactionType Key property. See {@link TransferPrices.transactionType}.
   * @param projectContractId Key property. See {@link TransferPrices.projectContractId}.
   * @param roleId Key property. See {@link TransferPrices.roleId}.
   * @returns A request builder for creating requests that delete an entity of type `TransferPrices`.
   */
  delete(
    dataAreaId: string,
    resourceId: string,
    borrowingLegalEntity: string,
    projectId: string,
    categoryId: string,
    effectiveDate: Moment,
    salesCurrency: string,
    transactionType: ProjTransferPriceTransType,
    projectContractId: string,
    roleId: string
  ): DeleteRequestBuilder<TransferPrices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransferPrices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransferPrices` by taking the entity as a parameter.
   */
  delete(entity: TransferPrices<T>): DeleteRequestBuilder<TransferPrices<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    resourceId?: string,
    borrowingLegalEntity?: string,
    projectId?: string,
    categoryId?: string,
    effectiveDate?: Moment,
    salesCurrency?: string,
    transactionType?: ProjTransferPriceTransType,
    projectContractId?: string,
    roleId?: string
  ): DeleteRequestBuilder<TransferPrices<T>, T> {
    return new DeleteRequestBuilder<TransferPrices<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransferPrices
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ResourceId: resourceId!,
            BorrowingLegalEntity: borrowingLegalEntity!,
            ProjectId: projectId!,
            CategoryId: categoryId!,
            EffectiveDate: effectiveDate!,
            SalesCurrency: salesCurrency!,
            TransactionType: transactionType!,
            ProjectContractId: projectContractId!,
            RoleId: roleId!
          }
    );
  }
}
