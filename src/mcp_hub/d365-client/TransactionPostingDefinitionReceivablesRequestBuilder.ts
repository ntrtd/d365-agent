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
import { TransactionPostingDefinitionReceivables } from './TransactionPostingDefinitionReceivables';
import { BillingCodeBillingClassAll } from './BillingCodeBillingClassAll';
import { CustomerTransactionType } from './CustomerTransactionType';

/**
 * Request builder class for operations supported on the {@link TransactionPostingDefinitionReceivables} entity.
 */
export class TransactionPostingDefinitionReceivablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransactionPostingDefinitionReceivables<T>, T> {
  /**
   * Returns a request builder for querying all `TransactionPostingDefinitionReceivables` entities.
   * @returns A request builder for creating requests to retrieve all `TransactionPostingDefinitionReceivables` entities.
   */
  getAll(): GetAllRequestBuilder<
    TransactionPostingDefinitionReceivables<T>,
    T
  > {
    return new GetAllRequestBuilder<
      TransactionPostingDefinitionReceivables<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TransactionPostingDefinitionReceivables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransactionPostingDefinitionReceivables`.
   */
  create(
    entity: TransactionPostingDefinitionReceivables<T>
  ): CreateRequestBuilder<TransactionPostingDefinitionReceivables<T>, T> {
    return new CreateRequestBuilder<
      TransactionPostingDefinitionReceivables<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TransactionPostingDefinitionReceivables` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransactionPostingDefinitionReceivables.dataAreaId}.
   * @param attributeTypeBillingClassificationBillingCodeAll Key property. See {@link TransactionPostingDefinitionReceivables.attributeTypeBillingClassificationBillingCodeAll}.
   * @param customerTransactionType Key property. See {@link TransactionPostingDefinitionReceivables.customerTransactionType}.
   * @param billingClassification Key property. See {@link TransactionPostingDefinitionReceivables.billingClassification}.
   * @param billingCode Key property. See {@link TransactionPostingDefinitionReceivables.billingCode}.
   * @returns A request builder for creating requests to retrieve one `TransactionPostingDefinitionReceivables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    attributeTypeBillingClassificationBillingCodeAll: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BillingCodeBillingClassAll'
    >,
    customerTransactionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CustomerTransactionType'
    >,
    billingClassification: DeserializedType<T, 'Edm.String'>,
    billingCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TransactionPostingDefinitionReceivables<T>, T> {
    return new GetByKeyRequestBuilder<
      TransactionPostingDefinitionReceivables<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      AttributeTypeBillingClassificationBillingCodeAll:
        attributeTypeBillingClassificationBillingCodeAll,
      CustomerTransactionType: customerTransactionType,
      BillingClassification: billingClassification,
      BillingCode: billingCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TransactionPostingDefinitionReceivables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransactionPostingDefinitionReceivables`.
   */
  update(
    entity: TransactionPostingDefinitionReceivables<T>
  ): UpdateRequestBuilder<TransactionPostingDefinitionReceivables<T>, T> {
    return new UpdateRequestBuilder<
      TransactionPostingDefinitionReceivables<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TransactionPostingDefinitionReceivables`.
   * @param dataAreaId Key property. See {@link TransactionPostingDefinitionReceivables.dataAreaId}.
   * @param attributeTypeBillingClassificationBillingCodeAll Key property. See {@link TransactionPostingDefinitionReceivables.attributeTypeBillingClassificationBillingCodeAll}.
   * @param customerTransactionType Key property. See {@link TransactionPostingDefinitionReceivables.customerTransactionType}.
   * @param billingClassification Key property. See {@link TransactionPostingDefinitionReceivables.billingClassification}.
   * @param billingCode Key property. See {@link TransactionPostingDefinitionReceivables.billingCode}.
   * @returns A request builder for creating requests that delete an entity of type `TransactionPostingDefinitionReceivables`.
   */
  delete(
    dataAreaId: string,
    attributeTypeBillingClassificationBillingCodeAll: BillingCodeBillingClassAll,
    customerTransactionType: CustomerTransactionType,
    billingClassification: string,
    billingCode: string
  ): DeleteRequestBuilder<TransactionPostingDefinitionReceivables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransactionPostingDefinitionReceivables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransactionPostingDefinitionReceivables` by taking the entity as a parameter.
   */
  delete(
    entity: TransactionPostingDefinitionReceivables<T>
  ): DeleteRequestBuilder<TransactionPostingDefinitionReceivables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    attributeTypeBillingClassificationBillingCodeAll?: BillingCodeBillingClassAll,
    customerTransactionType?: CustomerTransactionType,
    billingClassification?: string,
    billingCode?: string
  ): DeleteRequestBuilder<TransactionPostingDefinitionReceivables<T>, T> {
    return new DeleteRequestBuilder<
      TransactionPostingDefinitionReceivables<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransactionPostingDefinitionReceivables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AttributeTypeBillingClassificationBillingCodeAll:
              attributeTypeBillingClassificationBillingCodeAll!,
            CustomerTransactionType: customerTransactionType!,
            BillingClassification: billingClassification!,
            BillingCode: billingCode!
          }
    );
  }
}
