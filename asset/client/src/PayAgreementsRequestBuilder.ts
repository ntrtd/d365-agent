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
import { PayAgreements } from './PayAgreements';

/**
 * Request builder class for operations supported on the {@link PayAgreements} entity.
 */
export class PayAgreementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayAgreements<T>, T> {
  /**
   * Returns a request builder for querying all `PayAgreements` entities.
   * @returns A request builder for creating requests to retrieve all `PayAgreements` entities.
   */
  getAll(): GetAllRequestBuilder<PayAgreements<T>, T> {
    return new GetAllRequestBuilder<PayAgreements<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayAgreements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayAgreements`.
   */
  create(entity: PayAgreements<T>): CreateRequestBuilder<PayAgreements<T>, T> {
    return new CreateRequestBuilder<PayAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayAgreements` entity based on its keys.
   * @param dataAreaId Key property. See {@link PayAgreements.dataAreaId}.
   * @param payAgreementCode Key property. See {@link PayAgreements.payAgreementCode}.
   * @returns A request builder for creating requests to retrieve one `PayAgreements` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    payAgreementCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayAgreements<T>, T> {
    return new GetByKeyRequestBuilder<PayAgreements<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PayAgreementCode: payAgreementCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PayAgreements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayAgreements`.
   */
  update(entity: PayAgreements<T>): UpdateRequestBuilder<PayAgreements<T>, T> {
    return new UpdateRequestBuilder<PayAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayAgreements`.
   * @param dataAreaId Key property. See {@link PayAgreements.dataAreaId}.
   * @param payAgreementCode Key property. See {@link PayAgreements.payAgreementCode}.
   * @returns A request builder for creating requests that delete an entity of type `PayAgreements`.
   */
  delete(
    dataAreaId: string,
    payAgreementCode: string
  ): DeleteRequestBuilder<PayAgreements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayAgreements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayAgreements` by taking the entity as a parameter.
   */
  delete(entity: PayAgreements<T>): DeleteRequestBuilder<PayAgreements<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    payAgreementCode?: string
  ): DeleteRequestBuilder<PayAgreements<T>, T> {
    return new DeleteRequestBuilder<PayAgreements<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PayAgreements
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PayAgreementCode: payAgreementCode!
          }
    );
  }
}
