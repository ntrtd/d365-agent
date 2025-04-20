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
import { VendorBankAccounts } from './VendorBankAccounts';

/**
 * Request builder class for operations supported on the {@link VendorBankAccounts} entity.
 */
export class VendorBankAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorBankAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `VendorBankAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `VendorBankAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<VendorBankAccounts<T>, T> {
    return new GetAllRequestBuilder<VendorBankAccounts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendorBankAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorBankAccounts`.
   */
  create(
    entity: VendorBankAccounts<T>
  ): CreateRequestBuilder<VendorBankAccounts<T>, T> {
    return new CreateRequestBuilder<VendorBankAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorBankAccounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorBankAccounts.dataAreaId}.
   * @param vendorAccountNumber Key property. See {@link VendorBankAccounts.vendorAccountNumber}.
   * @param vendorBankAccountId Key property. See {@link VendorBankAccounts.vendorBankAccountId}.
   * @returns A request builder for creating requests to retrieve one `VendorBankAccounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vendorAccountNumber: DeserializedType<T, 'Edm.String'>,
    vendorBankAccountId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorBankAccounts<T>, T> {
    return new GetByKeyRequestBuilder<VendorBankAccounts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        VendorAccountNumber: vendorAccountNumber,
        VendorBankAccountId: vendorBankAccountId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorBankAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorBankAccounts`.
   */
  update(
    entity: VendorBankAccounts<T>
  ): UpdateRequestBuilder<VendorBankAccounts<T>, T> {
    return new UpdateRequestBuilder<VendorBankAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorBankAccounts`.
   * @param dataAreaId Key property. See {@link VendorBankAccounts.dataAreaId}.
   * @param vendorAccountNumber Key property. See {@link VendorBankAccounts.vendorAccountNumber}.
   * @param vendorBankAccountId Key property. See {@link VendorBankAccounts.vendorBankAccountId}.
   * @returns A request builder for creating requests that delete an entity of type `VendorBankAccounts`.
   */
  delete(
    dataAreaId: string,
    vendorAccountNumber: string,
    vendorBankAccountId: string
  ): DeleteRequestBuilder<VendorBankAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorBankAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorBankAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: VendorBankAccounts<T>
  ): DeleteRequestBuilder<VendorBankAccounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vendorAccountNumber?: string,
    vendorBankAccountId?: string
  ): DeleteRequestBuilder<VendorBankAccounts<T>, T> {
    return new DeleteRequestBuilder<VendorBankAccounts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorBankAccounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VendorAccountNumber: vendorAccountNumber!,
            VendorBankAccountId: vendorBankAccountId!
          }
    );
  }
}
