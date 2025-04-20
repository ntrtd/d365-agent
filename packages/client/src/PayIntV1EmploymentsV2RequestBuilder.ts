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
import { PayIntV1EmploymentsV2 } from './PayIntV1EmploymentsV2';

/**
 * Request builder class for operations supported on the {@link PayIntV1EmploymentsV2} entity.
 */
export class PayIntV1EmploymentsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1EmploymentsV2<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1EmploymentsV2` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1EmploymentsV2` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1EmploymentsV2<T>, T> {
    return new GetAllRequestBuilder<PayIntV1EmploymentsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1EmploymentsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1EmploymentsV2`.
   */
  create(
    entity: PayIntV1EmploymentsV2<T>
  ): CreateRequestBuilder<PayIntV1EmploymentsV2<T>, T> {
    return new CreateRequestBuilder<PayIntV1EmploymentsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1EmploymentsV2` entity based on its keys.
   * @param personnelNumber Key property. See {@link PayIntV1EmploymentsV2.personnelNumber}.
   * @param legalEntityId Key property. See {@link PayIntV1EmploymentsV2.legalEntityId}.
   * @param employmentId Key property. See {@link PayIntV1EmploymentsV2.employmentId}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1EmploymentsV2` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    employmentId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1EmploymentsV2<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1EmploymentsV2<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        LegalEntityId: legalEntityId,
        EmploymentId: employmentId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1EmploymentsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1EmploymentsV2`.
   */
  update(
    entity: PayIntV1EmploymentsV2<T>
  ): UpdateRequestBuilder<PayIntV1EmploymentsV2<T>, T> {
    return new UpdateRequestBuilder<PayIntV1EmploymentsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1EmploymentsV2`.
   * @param personnelNumber Key property. See {@link PayIntV1EmploymentsV2.personnelNumber}.
   * @param legalEntityId Key property. See {@link PayIntV1EmploymentsV2.legalEntityId}.
   * @param employmentId Key property. See {@link PayIntV1EmploymentsV2.employmentId}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1EmploymentsV2`.
   */
  delete(
    personnelNumber: string,
    legalEntityId: string,
    employmentId: string
  ): DeleteRequestBuilder<PayIntV1EmploymentsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1EmploymentsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1EmploymentsV2` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1EmploymentsV2<T>
  ): DeleteRequestBuilder<PayIntV1EmploymentsV2<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    legalEntityId?: string,
    employmentId?: string
  ): DeleteRequestBuilder<PayIntV1EmploymentsV2<T>, T> {
    return new DeleteRequestBuilder<PayIntV1EmploymentsV2<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof PayIntV1EmploymentsV2
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            LegalEntityId: legalEntityId!,
            EmploymentId: employmentId!
          }
    );
  }
}
