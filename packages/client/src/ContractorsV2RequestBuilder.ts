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
import { ContractorsV2 } from './ContractorsV2';

/**
 * Request builder class for operations supported on the {@link ContractorsV2} entity.
 */
export class ContractorsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ContractorsV2<T>, T> {
  /**
   * Returns a request builder for querying all `ContractorsV2` entities.
   * @returns A request builder for creating requests to retrieve all `ContractorsV2` entities.
   */
  getAll(): GetAllRequestBuilder<ContractorsV2<T>, T> {
    return new GetAllRequestBuilder<ContractorsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ContractorsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ContractorsV2`.
   */
  create(entity: ContractorsV2<T>): CreateRequestBuilder<ContractorsV2<T>, T> {
    return new CreateRequestBuilder<ContractorsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ContractorsV2` entity based on its keys.
   * @param personnelNumber Key property. See {@link ContractorsV2.personnelNumber}.
   * @param employmentLegalEntityId Key property. See {@link ContractorsV2.employmentLegalEntityId}.
   * @param employmentId Key property. See {@link ContractorsV2.employmentId}.
   * @returns A request builder for creating requests to retrieve one `ContractorsV2` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    employmentLegalEntityId: DeserializedType<T, 'Edm.String'>,
    employmentId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ContractorsV2<T>, T> {
    return new GetByKeyRequestBuilder<ContractorsV2<T>, T>(this.entityApi, {
      PersonnelNumber: personnelNumber,
      EmploymentLegalEntityId: employmentLegalEntityId,
      EmploymentId: employmentId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ContractorsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ContractorsV2`.
   */
  update(entity: ContractorsV2<T>): UpdateRequestBuilder<ContractorsV2<T>, T> {
    return new UpdateRequestBuilder<ContractorsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ContractorsV2`.
   * @param personnelNumber Key property. See {@link ContractorsV2.personnelNumber}.
   * @param employmentLegalEntityId Key property. See {@link ContractorsV2.employmentLegalEntityId}.
   * @param employmentId Key property. See {@link ContractorsV2.employmentId}.
   * @returns A request builder for creating requests that delete an entity of type `ContractorsV2`.
   */
  delete(
    personnelNumber: string,
    employmentLegalEntityId: string,
    employmentId: string
  ): DeleteRequestBuilder<ContractorsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ContractorsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ContractorsV2` by taking the entity as a parameter.
   */
  delete(entity: ContractorsV2<T>): DeleteRequestBuilder<ContractorsV2<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    employmentLegalEntityId?: string,
    employmentId?: string
  ): DeleteRequestBuilder<ContractorsV2<T>, T> {
    return new DeleteRequestBuilder<ContractorsV2<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof ContractorsV2
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            EmploymentLegalEntityId: employmentLegalEntityId!,
            EmploymentId: employmentId!
          }
    );
  }
}
