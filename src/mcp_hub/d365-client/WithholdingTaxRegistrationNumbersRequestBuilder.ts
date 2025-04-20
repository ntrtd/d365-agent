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
import { WithholdingTaxRegistrationNumbers } from './WithholdingTaxRegistrationNumbers';
import { TaxRegistrationTypeIn } from './TaxRegistrationTypeIn';

/**
 * Request builder class for operations supported on the {@link WithholdingTaxRegistrationNumbers} entity.
 */
export class WithholdingTaxRegistrationNumbersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WithholdingTaxRegistrationNumbers<T>, T> {
  /**
   * Returns a request builder for querying all `WithholdingTaxRegistrationNumbers` entities.
   * @returns A request builder for creating requests to retrieve all `WithholdingTaxRegistrationNumbers` entities.
   */
  getAll(): GetAllRequestBuilder<WithholdingTaxRegistrationNumbers<T>, T> {
    return new GetAllRequestBuilder<WithholdingTaxRegistrationNumbers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WithholdingTaxRegistrationNumbers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WithholdingTaxRegistrationNumbers`.
   */
  create(
    entity: WithholdingTaxRegistrationNumbers<T>
  ): CreateRequestBuilder<WithholdingTaxRegistrationNumbers<T>, T> {
    return new CreateRequestBuilder<WithholdingTaxRegistrationNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WithholdingTaxRegistrationNumbers` entity based on its keys.
   * @param registrationNumber Key property. See {@link WithholdingTaxRegistrationNumbers.registrationNumber}.
   * @param registrationNumberType Key property. See {@link WithholdingTaxRegistrationNumbers.registrationNumberType}.
   * @returns A request builder for creating requests to retrieve one `WithholdingTaxRegistrationNumbers` entity based on its keys.
   */
  getByKey(
    registrationNumber: DeserializedType<T, 'Edm.String'>,
    registrationNumberType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TaxRegistrationType_IN'
    >
  ): GetByKeyRequestBuilder<WithholdingTaxRegistrationNumbers<T>, T> {
    return new GetByKeyRequestBuilder<WithholdingTaxRegistrationNumbers<T>, T>(
      this.entityApi,
      {
        RegistrationNumber: registrationNumber,
        RegistrationNumberType: registrationNumberType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WithholdingTaxRegistrationNumbers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WithholdingTaxRegistrationNumbers`.
   */
  update(
    entity: WithholdingTaxRegistrationNumbers<T>
  ): UpdateRequestBuilder<WithholdingTaxRegistrationNumbers<T>, T> {
    return new UpdateRequestBuilder<WithholdingTaxRegistrationNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WithholdingTaxRegistrationNumbers`.
   * @param registrationNumber Key property. See {@link WithholdingTaxRegistrationNumbers.registrationNumber}.
   * @param registrationNumberType Key property. See {@link WithholdingTaxRegistrationNumbers.registrationNumberType}.
   * @returns A request builder for creating requests that delete an entity of type `WithholdingTaxRegistrationNumbers`.
   */
  delete(
    registrationNumber: string,
    registrationNumberType: TaxRegistrationTypeIn
  ): DeleteRequestBuilder<WithholdingTaxRegistrationNumbers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WithholdingTaxRegistrationNumbers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WithholdingTaxRegistrationNumbers` by taking the entity as a parameter.
   */
  delete(
    entity: WithholdingTaxRegistrationNumbers<T>
  ): DeleteRequestBuilder<WithholdingTaxRegistrationNumbers<T>, T>;
  delete(
    registrationNumberOrEntity: any,
    registrationNumberType?: TaxRegistrationTypeIn
  ): DeleteRequestBuilder<WithholdingTaxRegistrationNumbers<T>, T> {
    return new DeleteRequestBuilder<WithholdingTaxRegistrationNumbers<T>, T>(
      this.entityApi,
      registrationNumberOrEntity instanceof WithholdingTaxRegistrationNumbers
        ? registrationNumberOrEntity
        : {
            RegistrationNumber: registrationNumberOrEntity!,
            RegistrationNumberType: registrationNumberType!
          }
    );
  }
}
