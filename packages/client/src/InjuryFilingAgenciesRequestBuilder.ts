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
import { InjuryFilingAgencies } from './InjuryFilingAgencies';

/**
 * Request builder class for operations supported on the {@link InjuryFilingAgencies} entity.
 */
export class InjuryFilingAgenciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InjuryFilingAgencies<T>, T> {
  /**
   * Returns a request builder for querying all `InjuryFilingAgencies` entities.
   * @returns A request builder for creating requests to retrieve all `InjuryFilingAgencies` entities.
   */
  getAll(): GetAllRequestBuilder<InjuryFilingAgencies<T>, T> {
    return new GetAllRequestBuilder<InjuryFilingAgencies<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InjuryFilingAgencies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InjuryFilingAgencies`.
   */
  create(
    entity: InjuryFilingAgencies<T>
  ): CreateRequestBuilder<InjuryFilingAgencies<T>, T> {
    return new CreateRequestBuilder<InjuryFilingAgencies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InjuryFilingAgencies` entity based on its keys.
   * @param filingAgencyId Key property. See {@link InjuryFilingAgencies.filingAgencyId}.
   * @returns A request builder for creating requests to retrieve one `InjuryFilingAgencies` entity based on its keys.
   */
  getByKey(
    filingAgencyId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InjuryFilingAgencies<T>, T> {
    return new GetByKeyRequestBuilder<InjuryFilingAgencies<T>, T>(
      this.entityApi,
      { FilingAgencyId: filingAgencyId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InjuryFilingAgencies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InjuryFilingAgencies`.
   */
  update(
    entity: InjuryFilingAgencies<T>
  ): UpdateRequestBuilder<InjuryFilingAgencies<T>, T> {
    return new UpdateRequestBuilder<InjuryFilingAgencies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InjuryFilingAgencies`.
   * @param filingAgencyId Key property. See {@link InjuryFilingAgencies.filingAgencyId}.
   * @returns A request builder for creating requests that delete an entity of type `InjuryFilingAgencies`.
   */
  delete(
    filingAgencyId: string
  ): DeleteRequestBuilder<InjuryFilingAgencies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InjuryFilingAgencies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InjuryFilingAgencies` by taking the entity as a parameter.
   */
  delete(
    entity: InjuryFilingAgencies<T>
  ): DeleteRequestBuilder<InjuryFilingAgencies<T>, T>;
  delete(
    filingAgencyIdOrEntity: any
  ): DeleteRequestBuilder<InjuryFilingAgencies<T>, T> {
    return new DeleteRequestBuilder<InjuryFilingAgencies<T>, T>(
      this.entityApi,
      filingAgencyIdOrEntity instanceof InjuryFilingAgencies
        ? filingAgencyIdOrEntity
        : { FilingAgencyId: filingAgencyIdOrEntity! }
    );
  }
}
