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
import { PaymentPurposeCodes } from './PaymentPurposeCodes';

/**
 * Request builder class for operations supported on the {@link PaymentPurposeCodes} entity.
 */
export class PaymentPurposeCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymentPurposeCodes<T>, T> {
  /**
   * Returns a request builder for querying all `PaymentPurposeCodes` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentPurposeCodes` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentPurposeCodes<T>, T> {
    return new GetAllRequestBuilder<PaymentPurposeCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PaymentPurposeCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentPurposeCodes`.
   */
  create(
    entity: PaymentPurposeCodes<T>
  ): CreateRequestBuilder<PaymentPurposeCodes<T>, T> {
    return new CreateRequestBuilder<PaymentPurposeCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PaymentPurposeCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link PaymentPurposeCodes.dataAreaId}.
   * @param codeId Key property. See {@link PaymentPurposeCodes.codeId}.
   * @returns A request builder for creating requests to retrieve one `PaymentPurposeCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    codeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PaymentPurposeCodes<T>, T> {
    return new GetByKeyRequestBuilder<PaymentPurposeCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CodeId: codeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentPurposeCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentPurposeCodes`.
   */
  update(
    entity: PaymentPurposeCodes<T>
  ): UpdateRequestBuilder<PaymentPurposeCodes<T>, T> {
    return new UpdateRequestBuilder<PaymentPurposeCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentPurposeCodes`.
   * @param dataAreaId Key property. See {@link PaymentPurposeCodes.dataAreaId}.
   * @param codeId Key property. See {@link PaymentPurposeCodes.codeId}.
   * @returns A request builder for creating requests that delete an entity of type `PaymentPurposeCodes`.
   */
  delete(
    dataAreaId: string,
    codeId: string
  ): DeleteRequestBuilder<PaymentPurposeCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentPurposeCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentPurposeCodes` by taking the entity as a parameter.
   */
  delete(
    entity: PaymentPurposeCodes<T>
  ): DeleteRequestBuilder<PaymentPurposeCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    codeId?: string
  ): DeleteRequestBuilder<PaymentPurposeCodes<T>, T> {
    return new DeleteRequestBuilder<PaymentPurposeCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PaymentPurposeCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CodeId: codeId!
          }
    );
  }
}
