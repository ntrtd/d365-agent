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
import { EngineeringChangeCustomerApprovalTypes } from './EngineeringChangeCustomerApprovalTypes';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeCustomerApprovalTypes} entity.
 */
export class EngineeringChangeCustomerApprovalTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeCustomerApprovalTypes<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeCustomerApprovalTypes` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeCustomerApprovalTypes` entities.
   */
  getAll(): GetAllRequestBuilder<EngineeringChangeCustomerApprovalTypes<T>, T> {
    return new GetAllRequestBuilder<
      EngineeringChangeCustomerApprovalTypes<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeCustomerApprovalTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeCustomerApprovalTypes`.
   */
  create(
    entity: EngineeringChangeCustomerApprovalTypes<T>
  ): CreateRequestBuilder<EngineeringChangeCustomerApprovalTypes<T>, T> {
    return new CreateRequestBuilder<
      EngineeringChangeCustomerApprovalTypes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeCustomerApprovalTypes` entity based on its keys.
   * @param typeName Key property. See {@link EngineeringChangeCustomerApprovalTypes.typeName}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeCustomerApprovalTypes` entity based on its keys.
   */
  getByKey(
    typeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EngineeringChangeCustomerApprovalTypes<T>, T> {
    return new GetByKeyRequestBuilder<
      EngineeringChangeCustomerApprovalTypes<T>,
      T
    >(this.entityApi, { TypeName: typeName });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeCustomerApprovalTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeCustomerApprovalTypes`.
   */
  update(
    entity: EngineeringChangeCustomerApprovalTypes<T>
  ): UpdateRequestBuilder<EngineeringChangeCustomerApprovalTypes<T>, T> {
    return new UpdateRequestBuilder<
      EngineeringChangeCustomerApprovalTypes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeCustomerApprovalTypes`.
   * @param typeName Key property. See {@link EngineeringChangeCustomerApprovalTypes.typeName}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeCustomerApprovalTypes`.
   */
  delete(
    typeName: string
  ): DeleteRequestBuilder<EngineeringChangeCustomerApprovalTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeCustomerApprovalTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeCustomerApprovalTypes` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeCustomerApprovalTypes<T>
  ): DeleteRequestBuilder<EngineeringChangeCustomerApprovalTypes<T>, T>;
  delete(
    typeNameOrEntity: any
  ): DeleteRequestBuilder<EngineeringChangeCustomerApprovalTypes<T>, T> {
    return new DeleteRequestBuilder<
      EngineeringChangeCustomerApprovalTypes<T>,
      T
    >(
      this.entityApi,
      typeNameOrEntity instanceof EngineeringChangeCustomerApprovalTypes
        ? typeNameOrEntity
        : { TypeName: typeNameOrEntity! }
    );
  }
}
