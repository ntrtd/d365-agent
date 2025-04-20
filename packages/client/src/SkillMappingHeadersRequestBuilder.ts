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
import { SkillMappingHeaders } from './SkillMappingHeaders';

/**
 * Request builder class for operations supported on the {@link SkillMappingHeaders} entity.
 */
export class SkillMappingHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SkillMappingHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `SkillMappingHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `SkillMappingHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<SkillMappingHeaders<T>, T> {
    return new GetAllRequestBuilder<SkillMappingHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SkillMappingHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SkillMappingHeaders`.
   */
  create(
    entity: SkillMappingHeaders<T>
  ): CreateRequestBuilder<SkillMappingHeaders<T>, T> {
    return new CreateRequestBuilder<SkillMappingHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SkillMappingHeaders` entity based on its keys.
   * @param skillMapping Key property. See {@link SkillMappingHeaders.skillMapping}.
   * @returns A request builder for creating requests to retrieve one `SkillMappingHeaders` entity based on its keys.
   */
  getByKey(
    skillMapping: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SkillMappingHeaders<T>, T> {
    return new GetByKeyRequestBuilder<SkillMappingHeaders<T>, T>(
      this.entityApi,
      { SkillMapping: skillMapping }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SkillMappingHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SkillMappingHeaders`.
   */
  update(
    entity: SkillMappingHeaders<T>
  ): UpdateRequestBuilder<SkillMappingHeaders<T>, T> {
    return new UpdateRequestBuilder<SkillMappingHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SkillMappingHeaders`.
   * @param skillMapping Key property. See {@link SkillMappingHeaders.skillMapping}.
   * @returns A request builder for creating requests that delete an entity of type `SkillMappingHeaders`.
   */
  delete(skillMapping: string): DeleteRequestBuilder<SkillMappingHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SkillMappingHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SkillMappingHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: SkillMappingHeaders<T>
  ): DeleteRequestBuilder<SkillMappingHeaders<T>, T>;
  delete(
    skillMappingOrEntity: any
  ): DeleteRequestBuilder<SkillMappingHeaders<T>, T> {
    return new DeleteRequestBuilder<SkillMappingHeaders<T>, T>(
      this.entityApi,
      skillMappingOrEntity instanceof SkillMappingHeaders
        ? skillMappingOrEntity
        : { SkillMapping: skillMappingOrEntity! }
    );
  }
}
