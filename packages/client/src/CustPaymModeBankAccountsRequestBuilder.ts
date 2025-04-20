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
import { CustPaymModeBankAccounts } from './CustPaymModeBankAccounts';

/**
 * Request builder class for operations supported on the {@link CustPaymModeBankAccounts} entity.
 */
export class CustPaymModeBankAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustPaymModeBankAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `CustPaymModeBankAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `CustPaymModeBankAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<CustPaymModeBankAccounts<T>, T> {
    return new GetAllRequestBuilder<CustPaymModeBankAccounts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustPaymModeBankAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustPaymModeBankAccounts`.
   */
  create(
    entity: CustPaymModeBankAccounts<T>
  ): CreateRequestBuilder<CustPaymModeBankAccounts<T>, T> {
    return new CreateRequestBuilder<CustPaymModeBankAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustPaymModeBankAccounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustPaymModeBankAccounts.dataAreaId}.
   * @param lineId Key property. See {@link CustPaymModeBankAccounts.lineId}.
   * @returns A request builder for creating requests to retrieve one `CustPaymModeBankAccounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<CustPaymModeBankAccounts<T>, T> {
    return new GetByKeyRequestBuilder<CustPaymModeBankAccounts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LineId: lineId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustPaymModeBankAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustPaymModeBankAccounts`.
   */
  update(
    entity: CustPaymModeBankAccounts<T>
  ): UpdateRequestBuilder<CustPaymModeBankAccounts<T>, T> {
    return new UpdateRequestBuilder<CustPaymModeBankAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustPaymModeBankAccounts`.
   * @param dataAreaId Key property. See {@link CustPaymModeBankAccounts.dataAreaId}.
   * @param lineId Key property. See {@link CustPaymModeBankAccounts.lineId}.
   * @returns A request builder for creating requests that delete an entity of type `CustPaymModeBankAccounts`.
   */
  delete(
    dataAreaId: string,
    lineId: string
  ): DeleteRequestBuilder<CustPaymModeBankAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustPaymModeBankAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustPaymModeBankAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: CustPaymModeBankAccounts<T>
  ): DeleteRequestBuilder<CustPaymModeBankAccounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineId?: string
  ): DeleteRequestBuilder<CustPaymModeBankAccounts<T>, T> {
    return new DeleteRequestBuilder<CustPaymModeBankAccounts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustPaymModeBankAccounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineId: lineId!
          }
    );
  }
}
