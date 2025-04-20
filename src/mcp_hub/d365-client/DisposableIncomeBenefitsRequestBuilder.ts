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
import { DisposableIncomeBenefits } from './DisposableIncomeBenefits';

/**
 * Request builder class for operations supported on the {@link DisposableIncomeBenefits} entity.
 */
export class DisposableIncomeBenefitsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DisposableIncomeBenefits<T>, T> {
  /**
   * Returns a request builder for querying all `DisposableIncomeBenefits` entities.
   * @returns A request builder for creating requests to retrieve all `DisposableIncomeBenefits` entities.
   */
  getAll(): GetAllRequestBuilder<DisposableIncomeBenefits<T>, T> {
    return new GetAllRequestBuilder<DisposableIncomeBenefits<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DisposableIncomeBenefits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DisposableIncomeBenefits`.
   */
  create(
    entity: DisposableIncomeBenefits<T>
  ): CreateRequestBuilder<DisposableIncomeBenefits<T>, T> {
    return new CreateRequestBuilder<DisposableIncomeBenefits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DisposableIncomeBenefits` entity based on its keys.
   * @param benefitId Key property. See {@link DisposableIncomeBenefits.benefitId}.
   * @param name Key property. See {@link DisposableIncomeBenefits.name}.
   * @returns A request builder for creating requests to retrieve one `DisposableIncomeBenefits` entity based on its keys.
   */
  getByKey(
    benefitId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DisposableIncomeBenefits<T>, T> {
    return new GetByKeyRequestBuilder<DisposableIncomeBenefits<T>, T>(
      this.entityApi,
      {
        BenefitId: benefitId,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DisposableIncomeBenefits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DisposableIncomeBenefits`.
   */
  update(
    entity: DisposableIncomeBenefits<T>
  ): UpdateRequestBuilder<DisposableIncomeBenefits<T>, T> {
    return new UpdateRequestBuilder<DisposableIncomeBenefits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DisposableIncomeBenefits`.
   * @param benefitId Key property. See {@link DisposableIncomeBenefits.benefitId}.
   * @param name Key property. See {@link DisposableIncomeBenefits.name}.
   * @returns A request builder for creating requests that delete an entity of type `DisposableIncomeBenefits`.
   */
  delete(
    benefitId: string,
    name: string
  ): DeleteRequestBuilder<DisposableIncomeBenefits<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DisposableIncomeBenefits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DisposableIncomeBenefits` by taking the entity as a parameter.
   */
  delete(
    entity: DisposableIncomeBenefits<T>
  ): DeleteRequestBuilder<DisposableIncomeBenefits<T>, T>;
  delete(
    benefitIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<DisposableIncomeBenefits<T>, T> {
    return new DeleteRequestBuilder<DisposableIncomeBenefits<T>, T>(
      this.entityApi,
      benefitIdOrEntity instanceof DisposableIncomeBenefits
        ? benefitIdOrEntity
        : {
            BenefitId: benefitIdOrEntity!,
            Name: name!
          }
    );
  }
}
