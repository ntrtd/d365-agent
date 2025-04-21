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
import { BankCodaAccountStatements } from './BankCodaAccountStatements';

/**
 * Request builder class for operations supported on the {@link BankCodaAccountStatements} entity.
 */
export class BankCodaAccountStatementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankCodaAccountStatements<T>, T> {
  /**
   * Returns a request builder for querying all `BankCodaAccountStatements` entities.
   * @returns A request builder for creating requests to retrieve all `BankCodaAccountStatements` entities.
   */
  getAll(): GetAllRequestBuilder<BankCodaAccountStatements<T>, T> {
    return new GetAllRequestBuilder<BankCodaAccountStatements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BankCodaAccountStatements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankCodaAccountStatements`.
   */
  create(
    entity: BankCodaAccountStatements<T>
  ): CreateRequestBuilder<BankCodaAccountStatements<T>, T> {
    return new CreateRequestBuilder<BankCodaAccountStatements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BankCodaAccountStatements` entity based on its keys.
   * @param dataAreaId Key property. See {@link BankCodaAccountStatements.dataAreaId}.
   * @param bankAccount Key property. See {@link BankCodaAccountStatements.bankAccount}.
   * @param bankStatementDate Key property. See {@link BankCodaAccountStatements.bankStatementDate}.
   * @param bankStatement Key property. See {@link BankCodaAccountStatements.bankStatement}.
   * @returns A request builder for creating requests to retrieve one `BankCodaAccountStatements` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    bankAccount: DeserializedType<T, 'Edm.String'>,
    bankStatementDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    bankStatement: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BankCodaAccountStatements<T>, T> {
    return new GetByKeyRequestBuilder<BankCodaAccountStatements<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BankAccount: bankAccount,
        BankStatementDate: bankStatementDate,
        BankStatement: bankStatement
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BankCodaAccountStatements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankCodaAccountStatements`.
   */
  update(
    entity: BankCodaAccountStatements<T>
  ): UpdateRequestBuilder<BankCodaAccountStatements<T>, T> {
    return new UpdateRequestBuilder<BankCodaAccountStatements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BankCodaAccountStatements`.
   * @param dataAreaId Key property. See {@link BankCodaAccountStatements.dataAreaId}.
   * @param bankAccount Key property. See {@link BankCodaAccountStatements.bankAccount}.
   * @param bankStatementDate Key property. See {@link BankCodaAccountStatements.bankStatementDate}.
   * @param bankStatement Key property. See {@link BankCodaAccountStatements.bankStatement}.
   * @returns A request builder for creating requests that delete an entity of type `BankCodaAccountStatements`.
   */
  delete(
    dataAreaId: string,
    bankAccount: string,
    bankStatementDate: Moment,
    bankStatement: string
  ): DeleteRequestBuilder<BankCodaAccountStatements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankCodaAccountStatements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankCodaAccountStatements` by taking the entity as a parameter.
   */
  delete(
    entity: BankCodaAccountStatements<T>
  ): DeleteRequestBuilder<BankCodaAccountStatements<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    bankAccount?: string,
    bankStatementDate?: Moment,
    bankStatement?: string
  ): DeleteRequestBuilder<BankCodaAccountStatements<T>, T> {
    return new DeleteRequestBuilder<BankCodaAccountStatements<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BankCodaAccountStatements
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BankAccount: bankAccount!,
            BankStatementDate: bankStatementDate!,
            BankStatement: bankStatement!
          }
    );
  }
}
