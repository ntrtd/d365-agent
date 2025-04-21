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
import type { EventsDefinitionsApi } from './EventsDefinitionsApi';
import { BusinessEventsDirection } from './BusinessEventsDirection';
import { BusinessEventsDefinitionCoreTable } from './BusinessEventsDefinitionCoreTable';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "EventsDefinitions" of service "d365_metadata".
 */
export class EventsDefinitions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EventsDefinitionsType<T>
{
  /**
   * Technical entity name for EventsDefinitions.
   */
  static override _entityName = 'EventsDefinitions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EventsDefinitions entity.
   */
  static _keys = [
    'RefEntityName',
    'RefTableId',
    'DataSourceName',
    'Channel',
    'Direction',
    'LegalEntitySpecific'
  ];
  /**
   * Ref Entity Name.
   */
  declare refEntityName: DeserializedType<T, 'Edm.String'>;
  /**
   * Ref Table Id.
   */
  declare refTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Data Source Name.
   */
  declare dataSourceName: DeserializedType<T, 'Edm.String'>;
  /**
   * Channel.
   */
  declare channel: DeserializedType<T, 'Edm.String'>;
  /**
   * Direction.
   * @nullable
   */
  declare direction?: BusinessEventsDirection | null;
  /**
   * Legal Entity Specific.
   */
  declare legalEntitySpecific: DeserializedType<T, 'Edm.String'>;
  /**
   * Action.
   */
  declare action: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Core Table.
   * @nullable
   */
  declare coreTable?: BusinessEventsDefinitionCoreTable | null;
  /**
   * Ref Table Recversion Field.
   */
  declare refTableRecversionField: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Root Table Id.
   */
  declare rootTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Ref Table Name.
   * @nullable
   */
  declare refTableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Processor Class.
   */
  declare processorClass: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Validate.
   * @nullable
   */
  declare validate?: NoYes | null;
  /**
   * Handler Class.
   */
  declare handlerClass: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Enabled.
   * @nullable
   */
  declare enabled?: NoYes | null;
  /**
   * Ref Table Rec Id Field.
   */
  declare refTableRecIdField: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: EventsDefinitionsApi<T>) {
    super(_entityApi);
  }
}

export interface EventsDefinitionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  refEntityName: DeserializedType<T, 'Edm.String'>;
  refTableId: DeserializedType<T, 'Edm.Int32'>;
  dataSourceName: DeserializedType<T, 'Edm.String'>;
  channel: DeserializedType<T, 'Edm.String'>;
  direction?: BusinessEventsDirection | null;
  legalEntitySpecific: DeserializedType<T, 'Edm.String'>;
  action: DeserializedType<T, 'Edm.Int32'>;
  coreTable?: BusinessEventsDefinitionCoreTable | null;
  refTableRecversionField: DeserializedType<T, 'Edm.Int32'>;
  rootTableId: DeserializedType<T, 'Edm.Int32'>;
  refTableName?: DeserializedType<T, 'Edm.String'> | null;
  processorClass: DeserializedType<T, 'Edm.Int32'>;
  validate?: NoYes | null;
  handlerClass: DeserializedType<T, 'Edm.Int32'>;
  enabled?: NoYes | null;
  refTableRecIdField: DeserializedType<T, 'Edm.Int32'>;
}
