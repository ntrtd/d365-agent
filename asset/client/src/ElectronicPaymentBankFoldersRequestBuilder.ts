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
import { ElectronicPaymentBankFolders } from './ElectronicPaymentBankFolders';

/**
 * Request builder class for operations supported on the {@link ElectronicPaymentBankFolders} entity.
 */
export class ElectronicPaymentBankFoldersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ElectronicPaymentBankFolders<T>, T> {
  /**
   * Returns a request builder for querying all `ElectronicPaymentBankFolders` entities.
   * @returns A request builder for creating requests to retrieve all `ElectronicPaymentBankFolders` entities.
   */
  getAll(): GetAllRequestBuilder<ElectronicPaymentBankFolders<T>, T> {
    return new GetAllRequestBuilder<ElectronicPaymentBankFolders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ElectronicPaymentBankFolders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ElectronicPaymentBankFolders`.
   */
  create(
    entity: ElectronicPaymentBankFolders<T>
  ): CreateRequestBuilder<ElectronicPaymentBankFolders<T>, T> {
    return new CreateRequestBuilder<ElectronicPaymentBankFolders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ElectronicPaymentBankFolders` entity based on its keys.
   * @param dataAreaId Key property. See {@link ElectronicPaymentBankFolders.dataAreaId}.
   * @param layoutGroupId Key property. See {@link ElectronicPaymentBankFolders.layoutGroupId}.
   * @param bankFolder Key property. See {@link ElectronicPaymentBankFolders.bankFolder}.
   * @returns A request builder for creating requests to retrieve one `ElectronicPaymentBankFolders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    layoutGroupId: DeserializedType<T, 'Edm.String'>,
    bankFolder: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ElectronicPaymentBankFolders<T>, T> {
    return new GetByKeyRequestBuilder<ElectronicPaymentBankFolders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LayoutGroupId: layoutGroupId,
        BankFolder: bankFolder
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ElectronicPaymentBankFolders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ElectronicPaymentBankFolders`.
   */
  update(
    entity: ElectronicPaymentBankFolders<T>
  ): UpdateRequestBuilder<ElectronicPaymentBankFolders<T>, T> {
    return new UpdateRequestBuilder<ElectronicPaymentBankFolders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ElectronicPaymentBankFolders`.
   * @param dataAreaId Key property. See {@link ElectronicPaymentBankFolders.dataAreaId}.
   * @param layoutGroupId Key property. See {@link ElectronicPaymentBankFolders.layoutGroupId}.
   * @param bankFolder Key property. See {@link ElectronicPaymentBankFolders.bankFolder}.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicPaymentBankFolders`.
   */
  delete(
    dataAreaId: string,
    layoutGroupId: string,
    bankFolder: string
  ): DeleteRequestBuilder<ElectronicPaymentBankFolders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ElectronicPaymentBankFolders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicPaymentBankFolders` by taking the entity as a parameter.
   */
  delete(
    entity: ElectronicPaymentBankFolders<T>
  ): DeleteRequestBuilder<ElectronicPaymentBankFolders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    layoutGroupId?: string,
    bankFolder?: string
  ): DeleteRequestBuilder<ElectronicPaymentBankFolders<T>, T> {
    return new DeleteRequestBuilder<ElectronicPaymentBankFolders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ElectronicPaymentBankFolders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LayoutGroupId: layoutGroupId!,
            BankFolder: bankFolder!
          }
    );
  }
}
