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
import { TradeAllowanceAgreementHeaders } from './TradeAllowanceAgreementHeaders';

/**
 * Request builder class for operations supported on the {@link TradeAllowanceAgreementHeaders} entity.
 */
export class TradeAllowanceAgreementHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TradeAllowanceAgreementHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `TradeAllowanceAgreementHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `TradeAllowanceAgreementHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<TradeAllowanceAgreementHeaders<T>, T> {
    return new GetAllRequestBuilder<TradeAllowanceAgreementHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TradeAllowanceAgreementHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TradeAllowanceAgreementHeaders`.
   */
  create(
    entity: TradeAllowanceAgreementHeaders<T>
  ): CreateRequestBuilder<TradeAllowanceAgreementHeaders<T>, T> {
    return new CreateRequestBuilder<TradeAllowanceAgreementHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TradeAllowanceAgreementHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link TradeAllowanceAgreementHeaders.dataAreaId}.
   * @param agreementId Key property. See {@link TradeAllowanceAgreementHeaders.agreementId}.
   * @param customerAccountNumber Key property. See {@link TradeAllowanceAgreementHeaders.customerAccountNumber}.
   * @returns A request builder for creating requests to retrieve one `TradeAllowanceAgreementHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    agreementId: DeserializedType<T, 'Edm.String'>,
    customerAccountNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TradeAllowanceAgreementHeaders<T>, T> {
    return new GetByKeyRequestBuilder<TradeAllowanceAgreementHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AgreementId: agreementId,
        CustomerAccountNumber: customerAccountNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TradeAllowanceAgreementHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TradeAllowanceAgreementHeaders`.
   */
  update(
    entity: TradeAllowanceAgreementHeaders<T>
  ): UpdateRequestBuilder<TradeAllowanceAgreementHeaders<T>, T> {
    return new UpdateRequestBuilder<TradeAllowanceAgreementHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TradeAllowanceAgreementHeaders`.
   * @param dataAreaId Key property. See {@link TradeAllowanceAgreementHeaders.dataAreaId}.
   * @param agreementId Key property. See {@link TradeAllowanceAgreementHeaders.agreementId}.
   * @param customerAccountNumber Key property. See {@link TradeAllowanceAgreementHeaders.customerAccountNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TradeAllowanceAgreementHeaders`.
   */
  delete(
    dataAreaId: string,
    agreementId: string,
    customerAccountNumber: string
  ): DeleteRequestBuilder<TradeAllowanceAgreementHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TradeAllowanceAgreementHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TradeAllowanceAgreementHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: TradeAllowanceAgreementHeaders<T>
  ): DeleteRequestBuilder<TradeAllowanceAgreementHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    agreementId?: string,
    customerAccountNumber?: string
  ): DeleteRequestBuilder<TradeAllowanceAgreementHeaders<T>, T> {
    return new DeleteRequestBuilder<TradeAllowanceAgreementHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TradeAllowanceAgreementHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AgreementId: agreementId!,
            CustomerAccountNumber: customerAccountNumber!
          }
    );
  }
}
