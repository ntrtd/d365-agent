/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { PayAgreementLines } from './PayAgreementLines';

/**
 * Request builder class for operations supported on the {@link PayAgreementLines} entity.
 */
export class PayAgreementLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayAgreementLines<T>, T> {
  /**
   * Returns a request builder for querying all `PayAgreementLines` entities.
   * @returns A request builder for creating requests to retrieve all `PayAgreementLines` entities.
   */
  getAll(): GetAllRequestBuilder<PayAgreementLines<T>, T> {
    return new GetAllRequestBuilder<PayAgreementLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayAgreementLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayAgreementLines`.
   */
  create(
    entity: PayAgreementLines<T>
  ): CreateRequestBuilder<PayAgreementLines<T>, T> {
    return new CreateRequestBuilder<PayAgreementLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayAgreementLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link PayAgreementLines.dataAreaId}.
   * @param recordId Key property. See {@link PayAgreementLines.recordId}.
   * @returns A request builder for creating requests to retrieve one `PayAgreementLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<PayAgreementLines<T>, T> {
    return new GetByKeyRequestBuilder<PayAgreementLines<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      RecordId: recordId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PayAgreementLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayAgreementLines`.
   */
  update(
    entity: PayAgreementLines<T>
  ): UpdateRequestBuilder<PayAgreementLines<T>, T> {
    return new UpdateRequestBuilder<PayAgreementLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayAgreementLines`.
   * @param dataAreaId Key property. See {@link PayAgreementLines.dataAreaId}.
   * @param recordId Key property. See {@link PayAgreementLines.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `PayAgreementLines`.
   */
  delete(
    dataAreaId: string,
    recordId: BigNumber
  ): DeleteRequestBuilder<PayAgreementLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayAgreementLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayAgreementLines` by taking the entity as a parameter.
   */
  delete(
    entity: PayAgreementLines<T>
  ): DeleteRequestBuilder<PayAgreementLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recordId?: BigNumber
  ): DeleteRequestBuilder<PayAgreementLines<T>, T> {
    return new DeleteRequestBuilder<PayAgreementLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PayAgreementLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecordId: recordId!
          }
    );
  }
}
