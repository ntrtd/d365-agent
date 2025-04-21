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
import { ServiceLevelAgreements } from './ServiceLevelAgreements';

/**
 * Request builder class for operations supported on the {@link ServiceLevelAgreements} entity.
 */
export class ServiceLevelAgreementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceLevelAgreements<T>, T> {
  /**
   * Returns a request builder for querying all `ServiceLevelAgreements` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceLevelAgreements` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceLevelAgreements<T>, T> {
    return new GetAllRequestBuilder<ServiceLevelAgreements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ServiceLevelAgreements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceLevelAgreements`.
   */
  create(
    entity: ServiceLevelAgreements<T>
  ): CreateRequestBuilder<ServiceLevelAgreements<T>, T> {
    return new CreateRequestBuilder<ServiceLevelAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ServiceLevelAgreements` entity based on its keys.
   * @param dataAreaId Key property. See {@link ServiceLevelAgreements.dataAreaId}.
   * @param agreementId Key property. See {@link ServiceLevelAgreements.agreementId}.
   * @returns A request builder for creating requests to retrieve one `ServiceLevelAgreements` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    agreementId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ServiceLevelAgreements<T>, T> {
    return new GetByKeyRequestBuilder<ServiceLevelAgreements<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AgreementId: agreementId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceLevelAgreements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceLevelAgreements`.
   */
  update(
    entity: ServiceLevelAgreements<T>
  ): UpdateRequestBuilder<ServiceLevelAgreements<T>, T> {
    return new UpdateRequestBuilder<ServiceLevelAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceLevelAgreements`.
   * @param dataAreaId Key property. See {@link ServiceLevelAgreements.dataAreaId}.
   * @param agreementId Key property. See {@link ServiceLevelAgreements.agreementId}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceLevelAgreements`.
   */
  delete(
    dataAreaId: string,
    agreementId: string
  ): DeleteRequestBuilder<ServiceLevelAgreements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceLevelAgreements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceLevelAgreements` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceLevelAgreements<T>
  ): DeleteRequestBuilder<ServiceLevelAgreements<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    agreementId?: string
  ): DeleteRequestBuilder<ServiceLevelAgreements<T>, T> {
    return new DeleteRequestBuilder<ServiceLevelAgreements<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ServiceLevelAgreements
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AgreementId: agreementId!
          }
    );
  }
}
