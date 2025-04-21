/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { DiscussionSignOffsApi } from './DiscussionSignOffsApi';
import { NoYes } from './NoYes';
import { Discussions, DiscussionsType } from './Discussions';

/**
 * This class represents the entity "DiscussionSignOffs" of service "d365_metadata".
 */
export class DiscussionSignOffs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DiscussionSignOffsType<T>
{
  /**
   * Technical entity name for DiscussionSignOffs.
   */
  static override _entityName = 'DiscussionSignOffs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DiscussionSignOffs entity.
   */
  static _keys = [
    'DiscussionId',
    'SignOffWorkerPersonnelNumber',
    'DiscussionWorkerPersonnelNumber'
  ];
  /**
   * Discussion Id.
   */
  declare discussionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sign Off Worker Personnel Number.
   */
  declare signOffWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Discussion Worker Personnel Number.
   */
  declare discussionWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Sign Off Date Time.
   */
  declare signOffDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Required.
   * @nullable
   */
  declare required?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link Discussions} entity.
   */
  declare discussion?: Discussions<T> | null;

  constructor(_entityApi: DiscussionSignOffsApi<T>) {
    super(_entityApi);
  }
}

export interface DiscussionSignOffsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  discussionId: DeserializedType<T, 'Edm.String'>;
  signOffWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  discussionWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  signOffDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  required?: NoYes | null;
  discussion?: DiscussionsType<T> | null;
}
