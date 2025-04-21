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
import { CashFlowMgmtJourNamePaymAccountLists } from './CashFlowMgmtJourNamePaymAccountLists';
import { CfmPaymentAccountType } from './CfmPaymentAccountType';

/**
 * Request builder class for operations supported on the {@link CashFlowMgmtJourNamePaymAccountLists} entity.
 */
export class CashFlowMgmtJourNamePaymAccountListsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CashFlowMgmtJourNamePaymAccountLists<T>, T> {
  /**
   * Returns a request builder for querying all `CashFlowMgmtJourNamePaymAccountLists` entities.
   * @returns A request builder for creating requests to retrieve all `CashFlowMgmtJourNamePaymAccountLists` entities.
   */
  getAll(): GetAllRequestBuilder<CashFlowMgmtJourNamePaymAccountLists<T>, T> {
    return new GetAllRequestBuilder<CashFlowMgmtJourNamePaymAccountLists<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CashFlowMgmtJourNamePaymAccountLists` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CashFlowMgmtJourNamePaymAccountLists`.
   */
  create(
    entity: CashFlowMgmtJourNamePaymAccountLists<T>
  ): CreateRequestBuilder<CashFlowMgmtJourNamePaymAccountLists<T>, T> {
    return new CreateRequestBuilder<CashFlowMgmtJourNamePaymAccountLists<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CashFlowMgmtJourNamePaymAccountLists` entity based on its keys.
   * @param name Key property. See {@link CashFlowMgmtJourNamePaymAccountLists.name}.
   * @param accountNumber Key property. See {@link CashFlowMgmtJourNamePaymAccountLists.accountNumber}.
   * @param paymentAccountType Key property. See {@link CashFlowMgmtJourNamePaymAccountLists.paymentAccountType}.
   * @returns A request builder for creating requests to retrieve one `CashFlowMgmtJourNamePaymAccountLists` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>,
    accountNumber: DeserializedType<T, 'Edm.String'>,
    paymentAccountType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CFMPaymentAccountType'
    >
  ): GetByKeyRequestBuilder<CashFlowMgmtJourNamePaymAccountLists<T>, T> {
    return new GetByKeyRequestBuilder<
      CashFlowMgmtJourNamePaymAccountLists<T>,
      T
    >(this.entityApi, {
      Name: name,
      AccountNumber: accountNumber,
      PaymentAccountType: paymentAccountType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CashFlowMgmtJourNamePaymAccountLists`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CashFlowMgmtJourNamePaymAccountLists`.
   */
  update(
    entity: CashFlowMgmtJourNamePaymAccountLists<T>
  ): UpdateRequestBuilder<CashFlowMgmtJourNamePaymAccountLists<T>, T> {
    return new UpdateRequestBuilder<CashFlowMgmtJourNamePaymAccountLists<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CashFlowMgmtJourNamePaymAccountLists`.
   * @param name Key property. See {@link CashFlowMgmtJourNamePaymAccountLists.name}.
   * @param accountNumber Key property. See {@link CashFlowMgmtJourNamePaymAccountLists.accountNumber}.
   * @param paymentAccountType Key property. See {@link CashFlowMgmtJourNamePaymAccountLists.paymentAccountType}.
   * @returns A request builder for creating requests that delete an entity of type `CashFlowMgmtJourNamePaymAccountLists`.
   */
  delete(
    name: string,
    accountNumber: string,
    paymentAccountType: CfmPaymentAccountType
  ): DeleteRequestBuilder<CashFlowMgmtJourNamePaymAccountLists<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CashFlowMgmtJourNamePaymAccountLists`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CashFlowMgmtJourNamePaymAccountLists` by taking the entity as a parameter.
   */
  delete(
    entity: CashFlowMgmtJourNamePaymAccountLists<T>
  ): DeleteRequestBuilder<CashFlowMgmtJourNamePaymAccountLists<T>, T>;
  delete(
    nameOrEntity: any,
    accountNumber?: string,
    paymentAccountType?: CfmPaymentAccountType
  ): DeleteRequestBuilder<CashFlowMgmtJourNamePaymAccountLists<T>, T> {
    return new DeleteRequestBuilder<CashFlowMgmtJourNamePaymAccountLists<T>, T>(
      this.entityApi,
      nameOrEntity instanceof CashFlowMgmtJourNamePaymAccountLists
        ? nameOrEntity
        : {
            Name: nameOrEntity!,
            AccountNumber: accountNumber!,
            PaymentAccountType: paymentAccountType!
          }
    );
  }
}
