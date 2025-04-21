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
import { VendPaymModeBankAccounts } from './VendPaymModeBankAccounts';

/**
 * Request builder class for operations supported on the {@link VendPaymModeBankAccounts} entity.
 */
export class VendPaymModeBankAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendPaymModeBankAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `VendPaymModeBankAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `VendPaymModeBankAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<VendPaymModeBankAccounts<T>, T> {
    return new GetAllRequestBuilder<VendPaymModeBankAccounts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendPaymModeBankAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendPaymModeBankAccounts`.
   */
  create(
    entity: VendPaymModeBankAccounts<T>
  ): CreateRequestBuilder<VendPaymModeBankAccounts<T>, T> {
    return new CreateRequestBuilder<VendPaymModeBankAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendPaymModeBankAccounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendPaymModeBankAccounts.dataAreaId}.
   * @param lineId Key property. See {@link VendPaymModeBankAccounts.lineId}.
   * @returns A request builder for creating requests to retrieve one `VendPaymModeBankAccounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<VendPaymModeBankAccounts<T>, T> {
    return new GetByKeyRequestBuilder<VendPaymModeBankAccounts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LineId: lineId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendPaymModeBankAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendPaymModeBankAccounts`.
   */
  update(
    entity: VendPaymModeBankAccounts<T>
  ): UpdateRequestBuilder<VendPaymModeBankAccounts<T>, T> {
    return new UpdateRequestBuilder<VendPaymModeBankAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendPaymModeBankAccounts`.
   * @param dataAreaId Key property. See {@link VendPaymModeBankAccounts.dataAreaId}.
   * @param lineId Key property. See {@link VendPaymModeBankAccounts.lineId}.
   * @returns A request builder for creating requests that delete an entity of type `VendPaymModeBankAccounts`.
   */
  delete(
    dataAreaId: string,
    lineId: string
  ): DeleteRequestBuilder<VendPaymModeBankAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendPaymModeBankAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendPaymModeBankAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: VendPaymModeBankAccounts<T>
  ): DeleteRequestBuilder<VendPaymModeBankAccounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineId?: string
  ): DeleteRequestBuilder<VendPaymModeBankAccounts<T>, T> {
    return new DeleteRequestBuilder<VendPaymModeBankAccounts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendPaymModeBankAccounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineId: lineId!
          }
    );
  }
}
