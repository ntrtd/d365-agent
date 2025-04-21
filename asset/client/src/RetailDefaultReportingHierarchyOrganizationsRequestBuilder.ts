/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { RetailDefaultReportingHierarchyOrganizations } from './RetailDefaultReportingHierarchyOrganizations';

/**
 * Request builder class for operations supported on the {@link RetailDefaultReportingHierarchyOrganizations} entity.
 */
export class RetailDefaultReportingHierarchyOrganizationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailDefaultReportingHierarchyOrganizations<T>, T> {
  /**
   * Returns a request builder for querying all `RetailDefaultReportingHierarchyOrganizations` entities.
   * @returns A request builder for creating requests to retrieve all `RetailDefaultReportingHierarchyOrganizations` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailDefaultReportingHierarchyOrganizations<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailDefaultReportingHierarchyOrganizations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailDefaultReportingHierarchyOrganizations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailDefaultReportingHierarchyOrganizations`.
   */
  create(
    entity: RetailDefaultReportingHierarchyOrganizations<T>
  ): CreateRequestBuilder<RetailDefaultReportingHierarchyOrganizations<T>, T> {
    return new CreateRequestBuilder<
      RetailDefaultReportingHierarchyOrganizations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailDefaultReportingHierarchyOrganizations` entity based on its keys.
   * @param organizationNumber Key property. See {@link RetailDefaultReportingHierarchyOrganizations.organizationNumber}.
   * @param validFrom Key property. See {@link RetailDefaultReportingHierarchyOrganizations.validFrom}.
   * @param validTo Key property. See {@link RetailDefaultReportingHierarchyOrganizations.validTo}.
   * @returns A request builder for creating requests to retrieve one `RetailDefaultReportingHierarchyOrganizations` entity based on its keys.
   */
  getByKey(
    organizationNumber: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<
    RetailDefaultReportingHierarchyOrganizations<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailDefaultReportingHierarchyOrganizations<T>,
      T
    >(this.entityApi, {
      OrganizationNumber: organizationNumber,
      ValidFrom: validFrom,
      ValidTo: validTo
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailDefaultReportingHierarchyOrganizations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailDefaultReportingHierarchyOrganizations`.
   */
  update(
    entity: RetailDefaultReportingHierarchyOrganizations<T>
  ): UpdateRequestBuilder<RetailDefaultReportingHierarchyOrganizations<T>, T> {
    return new UpdateRequestBuilder<
      RetailDefaultReportingHierarchyOrganizations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailDefaultReportingHierarchyOrganizations`.
   * @param organizationNumber Key property. See {@link RetailDefaultReportingHierarchyOrganizations.organizationNumber}.
   * @param validFrom Key property. See {@link RetailDefaultReportingHierarchyOrganizations.validFrom}.
   * @param validTo Key property. See {@link RetailDefaultReportingHierarchyOrganizations.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `RetailDefaultReportingHierarchyOrganizations`.
   */
  delete(
    organizationNumber: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<RetailDefaultReportingHierarchyOrganizations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailDefaultReportingHierarchyOrganizations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailDefaultReportingHierarchyOrganizations` by taking the entity as a parameter.
   */
  delete(
    entity: RetailDefaultReportingHierarchyOrganizations<T>
  ): DeleteRequestBuilder<RetailDefaultReportingHierarchyOrganizations<T>, T>;
  delete(
    organizationNumberOrEntity: any,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<RetailDefaultReportingHierarchyOrganizations<T>, T> {
    return new DeleteRequestBuilder<
      RetailDefaultReportingHierarchyOrganizations<T>,
      T
    >(
      this.entityApi,
      organizationNumberOrEntity instanceof
      RetailDefaultReportingHierarchyOrganizations
        ? organizationNumberOrEntity
        : {
            OrganizationNumber: organizationNumberOrEntity!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
