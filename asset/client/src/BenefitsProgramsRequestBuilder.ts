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
import { BenefitsPrograms } from './BenefitsPrograms';

/**
 * Request builder class for operations supported on the {@link BenefitsPrograms} entity.
 */
export class BenefitsProgramsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsPrograms<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsPrograms` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsPrograms` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsPrograms<T>, T> {
    return new GetAllRequestBuilder<BenefitsPrograms<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitsPrograms` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsPrograms`.
   */
  create(
    entity: BenefitsPrograms<T>
  ): CreateRequestBuilder<BenefitsPrograms<T>, T> {
    return new CreateRequestBuilder<BenefitsPrograms<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsPrograms` entity based on its keys.
   * @param programId Key property. See {@link BenefitsPrograms.programId}.
   * @returns A request builder for creating requests to retrieve one `BenefitsPrograms` entity based on its keys.
   */
  getByKey(
    programId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsPrograms<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsPrograms<T>, T>(this.entityApi, {
      ProgramId: programId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsPrograms`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsPrograms`.
   */
  update(
    entity: BenefitsPrograms<T>
  ): UpdateRequestBuilder<BenefitsPrograms<T>, T> {
    return new UpdateRequestBuilder<BenefitsPrograms<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsPrograms`.
   * @param programId Key property. See {@link BenefitsPrograms.programId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPrograms`.
   */
  delete(programId: string): DeleteRequestBuilder<BenefitsPrograms<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsPrograms`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPrograms` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsPrograms<T>
  ): DeleteRequestBuilder<BenefitsPrograms<T>, T>;
  delete(programIdOrEntity: any): DeleteRequestBuilder<BenefitsPrograms<T>, T> {
    return new DeleteRequestBuilder<BenefitsPrograms<T>, T>(
      this.entityApi,
      programIdOrEntity instanceof BenefitsPrograms
        ? programIdOrEntity
        : { ProgramId: programIdOrEntity! }
    );
  }
}
