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
import { EmploymentsV2 } from './EmploymentsV2';

/**
 * Request builder class for operations supported on the {@link EmploymentsV2} entity.
 */
export class EmploymentsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmploymentsV2<T>, T> {
  /**
   * Returns a request builder for querying all `EmploymentsV2` entities.
   * @returns A request builder for creating requests to retrieve all `EmploymentsV2` entities.
   */
  getAll(): GetAllRequestBuilder<EmploymentsV2<T>, T> {
    return new GetAllRequestBuilder<EmploymentsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmploymentsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmploymentsV2`.
   */
  create(entity: EmploymentsV2<T>): CreateRequestBuilder<EmploymentsV2<T>, T> {
    return new CreateRequestBuilder<EmploymentsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EmploymentsV2` entity based on its keys.
   * @param personnelNumber Key property. See {@link EmploymentsV2.personnelNumber}.
   * @param legalEntityId Key property. See {@link EmploymentsV2.legalEntityId}.
   * @param employmentId Key property. See {@link EmploymentsV2.employmentId}.
   * @returns A request builder for creating requests to retrieve one `EmploymentsV2` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    employmentId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EmploymentsV2<T>, T> {
    return new GetByKeyRequestBuilder<EmploymentsV2<T>, T>(this.entityApi, {
      PersonnelNumber: personnelNumber,
      LegalEntityId: legalEntityId,
      EmploymentId: employmentId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EmploymentsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmploymentsV2`.
   */
  update(entity: EmploymentsV2<T>): UpdateRequestBuilder<EmploymentsV2<T>, T> {
    return new UpdateRequestBuilder<EmploymentsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmploymentsV2`.
   * @param personnelNumber Key property. See {@link EmploymentsV2.personnelNumber}.
   * @param legalEntityId Key property. See {@link EmploymentsV2.legalEntityId}.
   * @param employmentId Key property. See {@link EmploymentsV2.employmentId}.
   * @returns A request builder for creating requests that delete an entity of type `EmploymentsV2`.
   */
  delete(
    personnelNumber: string,
    legalEntityId: string,
    employmentId: string
  ): DeleteRequestBuilder<EmploymentsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmploymentsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmploymentsV2` by taking the entity as a parameter.
   */
  delete(entity: EmploymentsV2<T>): DeleteRequestBuilder<EmploymentsV2<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    legalEntityId?: string,
    employmentId?: string
  ): DeleteRequestBuilder<EmploymentsV2<T>, T> {
    return new DeleteRequestBuilder<EmploymentsV2<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof EmploymentsV2
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            LegalEntityId: legalEntityId!,
            EmploymentId: employmentId!
          }
    );
  }
}
