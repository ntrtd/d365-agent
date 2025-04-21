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
import { ReceiptProfileLines } from './ReceiptProfileLines';
import { RetailReceipt } from './RetailReceipt';

/**
 * Request builder class for operations supported on the {@link ReceiptProfileLines} entity.
 */
export class ReceiptProfileLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReceiptProfileLines<T>, T> {
  /**
   * Returns a request builder for querying all `ReceiptProfileLines` entities.
   * @returns A request builder for creating requests to retrieve all `ReceiptProfileLines` entities.
   */
  getAll(): GetAllRequestBuilder<ReceiptProfileLines<T>, T> {
    return new GetAllRequestBuilder<ReceiptProfileLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReceiptProfileLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReceiptProfileLines`.
   */
  create(
    entity: ReceiptProfileLines<T>
  ): CreateRequestBuilder<ReceiptProfileLines<T>, T> {
    return new CreateRequestBuilder<ReceiptProfileLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReceiptProfileLines` entity based on its keys.
   * @param profileId Key property. See {@link ReceiptProfileLines.profileId}.
   * @param receiptType Key property. See {@link ReceiptProfileLines.receiptType}.
   * @returns A request builder for creating requests to retrieve one `ReceiptProfileLines` entity based on its keys.
   */
  getByKey(
    profileId: DeserializedType<T, 'Edm.String'>,
    receiptType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailReceipt'
    >
  ): GetByKeyRequestBuilder<ReceiptProfileLines<T>, T> {
    return new GetByKeyRequestBuilder<ReceiptProfileLines<T>, T>(
      this.entityApi,
      {
        ProfileId: profileId,
        ReceiptType: receiptType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReceiptProfileLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReceiptProfileLines`.
   */
  update(
    entity: ReceiptProfileLines<T>
  ): UpdateRequestBuilder<ReceiptProfileLines<T>, T> {
    return new UpdateRequestBuilder<ReceiptProfileLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReceiptProfileLines`.
   * @param profileId Key property. See {@link ReceiptProfileLines.profileId}.
   * @param receiptType Key property. See {@link ReceiptProfileLines.receiptType}.
   * @returns A request builder for creating requests that delete an entity of type `ReceiptProfileLines`.
   */
  delete(
    profileId: string,
    receiptType: RetailReceipt
  ): DeleteRequestBuilder<ReceiptProfileLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReceiptProfileLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReceiptProfileLines` by taking the entity as a parameter.
   */
  delete(
    entity: ReceiptProfileLines<T>
  ): DeleteRequestBuilder<ReceiptProfileLines<T>, T>;
  delete(
    profileIdOrEntity: any,
    receiptType?: RetailReceipt
  ): DeleteRequestBuilder<ReceiptProfileLines<T>, T> {
    return new DeleteRequestBuilder<ReceiptProfileLines<T>, T>(
      this.entityApi,
      profileIdOrEntity instanceof ReceiptProfileLines
        ? profileIdOrEntity
        : {
            ProfileId: profileIdOrEntity!,
            ReceiptType: receiptType!
          }
    );
  }
}
